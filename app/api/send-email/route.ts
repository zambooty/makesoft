import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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
        const { fromEmail, subject, message } = body

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

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'makesoft <sales@makesoft.io>', // Using verified sales email
            to: 'mckale.g.jonas@gmail.com',
            replyTo: fromEmail,
            subject: subject,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${fromEmail}</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            This email was sent from the makesoft website contact form.
          </p>
        </div>
      `,
        })

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
