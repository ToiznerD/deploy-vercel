import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer"
import { Options } from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) { 
        const { name, subject, message, email ,signup} = await req.json();
        
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
        let mailOptions1: { from: string; to: any; subject: string; text: string; }
        let mailOptions2: { from: string; to: any; subject: string; text: string; }

        if (signup){
            mailOptions1 = {
                from: "verceldeploy@outlook.com",
                to: email, 
                subject: `Welcome to our website!`,
                text: `
                Hello ${name} and welcome to our website.    
                `  
            }
            await transporter.sendMail(mailOptions1);
 
         }
         else {
             mailOptions1 = {
                from: "verceldeploy@outlook.com",
                to: 'verceldeploy@outlook.com', 
                subject: `New contact message from VercelDeploy: ${subject}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Subject: ${subject}
                    Message: ${message}
                `        
         }
         mailOptions2 = {
            from: "verceldeploy@outlook.com",
            to: email, 
            subject: `Thank you for contact us. we will reply soon.`,
            text: `you message is:
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                Message: ${message}
            `        
     }
     const sendMailWithDelay = (mailOptions:any, timeout:any, callback:any) => {
        setTimeout(() => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
              callback(false); 
            } else {
              console.log('Email sent:', info.response);
              callback(true); 
            }
          });
        }, timeout);
      };
      
      // Use Promise.all to wait for both emails to be sent
      Promise.all([
        new Promise((resolve) => sendMailWithDelay(mailOptions1, 0, resolve)),
        new Promise((resolve) => sendMailWithDelay(mailOptions2, 2000, resolve)),
      ])
        .then((results) => {
          const allEmailsSent = results.every((result) => result === true);
          if (allEmailsSent) {
            return new NextResponse("Email sent successfully", { status: 200 });
        } else {
            return new NextResponse('Something went wrong', { status: 405 });
        }
        })
        .catch((error) => {
          console.error('Error sending emails:', error);
          return new NextResponse(error.message, { status: 500 });
        });


        return new NextResponse("Email sent successfully", { status: 200 });

    }}
