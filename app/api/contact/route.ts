import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, services, message } = body;

        // basic validation
        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL || process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: `🚀 New Project Inquiry: ${firstName} ${lastName}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 20px auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                    .header { background-color: #F5A81C; color: white; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 24px; font-weight: normal; letter-spacing: 2px; }
                    .content { padding: 30px; background-color: #fff; }
                    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    .info-table td { padding: 12px 10px; border-bottom: 1px solid #f9f9f9; }
                    .label { font-weight: bold; color: #F5A81C; width: 140px; }
                    .message-box { background-color: #f8f9fa; border-left: 4px solid #F5A81C; padding: 20px; margin-top: 20px; border-radius: 4px; }
                    .footer { background-color: #f4f4f4; color: #777; padding: 20px; text-align: center; font-size: 12px; }
                    .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background-color: #eee; font-size: 12px; margin-right: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>MULTI TASK SOLUTIONS</h1>
                        <p style="margin-top: 5px; opacity: 0.8;">New Business Inquiry</p>
                    </div>
                    <div class="content">
                        <p>Hello Admin,</p>
                        <p>A new inquiry has been received through the Multi Task Solutions contact portal.</p>
                        
                        <table class="info-table">
                            <tr>
                                <td class="label">Client Name</td>
                                <td>${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td class="label">Email Address</td>
                                <td><a href="mailto:${email}" style="color: #F5A81C; text-decoration: none;">${email}</a></td>
                            </tr>
                            <tr>
                                <td class="label">Phone Number</td>
                                <td>${phone || "Not provided"}</td>
                            </tr>
                            <tr>
                                <td class="label">Interested In</td>
                                <td>
                                    ${services && services.length > 0
                    ? services.map((s: string) => `<span class="badge">${s}</span>`).join('')
                    : "General Inquiry"}
                                </td>
                            </tr>
                        </table>

                        <div class="message-box">
                            <p style="margin-top: 0; font-weight: bold; color: #F5A81C;">Client Message:</p>
                            <p style="margin-bottom: 0;">${message}</p>
                        </div>

                        <p style="margin-top: 30px;">Please reach out to the client within 24 hours.</p>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Multi Task Solutions. All rights reserved.</p>
                        <p>This is an automated notification from your website's contact system.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {
        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { error: "Failed to send email. please check server logs." },
            { status: 500 }
        );
    }
}
