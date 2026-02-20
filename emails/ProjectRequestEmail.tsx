import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ProjectRequestEmailProps {
    fromEmail: string;
    subject: string;
    message: string;
}

export default function ProjectRequestEmail({
    fromEmail,
    subject,
    message,
}: ProjectRequestEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New project request from makesoft.io</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={heading}>New Project Request</Heading>

                    <Section style={section}>
                        <Text style={label}>From</Text>
                        <Text style={value}>{fromEmail}</Text>
                    </Section>

                    <Section style={section}>
                        <Text style={label}>Subject</Text>
                        <Text style={value}>{subject}</Text>
                    </Section>

                    <Section style={section}>
                        <Text style={label}>Message</Text>
                        <Text style={messageStyle}>{message}</Text>
                    </Section>

                    <Section style={buttonSection}>
                        <Button
                            style={button}
                            href={`mailto:${fromEmail}`}
                        >
                            Reply to Client
                        </Button>
                    </Section>

                    <Text style={footer}>
                        © {new Date().getFullYear()} makesoft.io — All rights reserved.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#0f0f0f",
    padding: "40px 0",
    fontFamily: "Arial, sans-serif",
};

const container = {
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#ffffff",
};

const heading = {
    fontSize: "24px",
    marginBottom: "24px",
};

const section = {
    marginBottom: "20px",
};

const label = {
    fontSize: "12px",
    textTransform: "uppercase" as const,
    color: "#888888",
    marginBottom: "4px",
};

const value = {
    fontSize: "16px",
    fontWeight: "bold" as const,
};

const messageStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
    whiteSpace: "pre-line" as const,
};

const buttonSection = {
    marginTop: "30px",
};

const button = {
    backgroundColor: "#22c55e",
    color: "#000000",
    padding: "12px 20px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
};

const footer = {
    marginTop: "40px",
    fontSize: "12px",
    color: "#777777",
    textAlign: "center" as const,
};
