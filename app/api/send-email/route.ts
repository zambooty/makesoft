import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import ProjectRequestEmail from '@/emails/ProjectRequestEmail'
import AutoReplyEmail from '@/emails/AutoReplyEmail'

// Lazy initialization to avoid build-time errors
const getResendClient = () => {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        throw new Error('RESEND_API_KEY is not configured')
    }
    return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { fromEmail, subject, message, name } = body

        // Validate required fields
        if (!fromEmail || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(fromEmail)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Initialize Resend client
        const resend = getResendClient()

        // Render email templates
        const projectRequestHtml = await render(
            ProjectRequestEmail({
                fromEmail,
                subject,
                message,
            })
        )

        const autoReplyHtml = await render(
            AutoReplyEmail({ name })
        )

        // Send notification to team
        const { data, error } = await resend.emails.send({
            from: 'MakeSoft <no-reply@makesoft.io>',
            to: 'sales@makesoft.io',
            replyTo: fromEmail,
            subject: `New Request: ${subject}`,
            html: projectRequestHtml,
        })

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        // Send auto-reply to client
        try {
            await resend.emails.send({
                from: 'MakeSoft <sales@makesoft.io>',
                to: fromEmail,
                subject: 'We received your request',
                html: autoReplyHtml,
            })
        } catch (autoReplyError) {
            console.error('Error sending auto-reply:', autoReplyError)
        }

        return NextResponse.json({ success: true, data }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)

        // Check if it's an API key error
        if (error instanceof Error && error.message.includes('RESEND_API_KEY')) {
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support directly.' },
                { status: 503 }
            )
        }

        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
