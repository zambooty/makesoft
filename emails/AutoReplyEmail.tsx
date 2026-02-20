import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface AutoReplyEmailProps {
    name?: string;
}

export default function AutoReplyEmail({ name }: AutoReplyEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>We received your request — makesoft.io</Preview>
            <Body style={{ fontFamily: "Arial", background: "#f4f4f4", padding: 40 }}>
                <Container style={{ background: "#ffffff", padding: 30, borderRadius: 8 }}>
                    <Heading>Thanks for reaching out 👋</Heading>
                    <Text>
                        Hi {name || "there"},
                    </Text>
                    <Text>
                        We’ve received your project request and our team at makesoft.io
                        will review it shortly.
                    </Text>
                    <Text>
                        You can expect a response within 24 hours.
                    </Text>
                    <Text style={{ marginTop: 30 }}>
                        — The MakeSoft Team
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
