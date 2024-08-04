import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer"

export async function POST(req: NextRequest) { 
    try {
        const { name, subject, message, email } = await req.json();

        if (!name || !email) {
            return new NextResponse("Name and email are required", { status: 400 });
        }
        
        const transporter = createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false,
            },
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS
            }
        });

        const mailOptions = {
            from: "verceldeploy@outlook.com",
            to: 'verceldeploy@outlook.com', // Replace with your email address
            subject: `New contact message from VercelDeploy: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `
        };

        // Send the email using async/await
        await transporter.sendMail(mailOptions);

        return new NextResponse("Email sent successfully", { status: 200 });

    } catch (error: any) {
        console.error('Error sending email:', error);
        return new NextResponse(error.message, { status: 500 });
    }
}
