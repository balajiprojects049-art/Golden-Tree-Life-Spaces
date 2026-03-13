import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    try {
        const {
            fullName,
            whatsapp,
            pincode,
            city,
            companyName,
            housingSocietyName,
            avgMonthlyBill,
            designation,
            agmStatus,
            customerSegment
        } = req.body;

        if (!fullName || !whatsapp || !customerSegment) {
            return res.status(400).json({ success: false, error: 'Required fields are missing' });
        }

        // Create Gmail Transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Build segment-specific rows
        const row = (label, value) =>
            value ? `<div class="field"><span class="label">${label}</span><div class="value">${value}</div></div>` : '';

        let segmentRows = '';
        if (customerSegment === 'Residential') {
            segmentRows = `
                ${row('📍 Pincode', pincode)}
                ${row('💡 Avg Monthly Bill', avgMonthlyBill)}
            `;
        } else if (customerSegment === 'Housing Society') {
            segmentRows = `
                ${row('🏘️ Society Name', housingSocietyName)}
                ${row('📍 Pincode', pincode)}
                ${row('💡 Monthly Bill', avgMonthlyBill)}
                ${row('👤 Designation', designation)}
                ${row('✅ AGM Approval Status', agmStatus)}
            `;
        } else if (customerSegment === 'Commercial') {
            segmentRows = `
                ${row('🏢 Company Name', companyName)}
                ${row('🌆 City', city)}
                ${row('📍 Pincode', pincode)}
                ${row('💡 Monthly Bill', avgMonthlyBill)}
            `;
        }

        const mailOptions = {
            from: `"${fullName} - Website Lead" <no-reply@goldentreelifespaces.com>`,
            to: process.env.RECEIVER_EMAIL || 'solargoldentree@gmail.com',
            replyTo: process.env.EMAIL_USER,
            subject: `🌞 New Lead: ${fullName} (${customerSegment})`,
            html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f1f5f9; }
    .container { max-width: 600px; margin: 30px auto; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #0b1021 0%, #1d3557 100%); color: white; padding: 32px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; letter-spacing: 1px; }
    .header p { margin: 8px 0 0; opacity: 0.7; font-size: 14px; }
    .badge { display: inline-block; background: rgba(255,255,255,0.15); color: #fff; font-weight: 700; font-size: 13px; padding: 6px 18px; border-radius: 999px; margin-top: 12px; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #1d3557; display: block; margin-bottom: 5px; font-size: 13px; }
    .value { background: white; padding: 12px; border-left: 3px solid #1d3557; border-radius: 4px; font-size: 14px; color: #334155; }
    .footer { background: #0b1021; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌞 Golden Tree Life Spaces</h1>
      <p>New Free Consultation Request</p>
      <span class="badge">${customerSegment} Customer</span>
    </div>
    <div class="content">
      ${row('👤 Full Name', fullName)}
      ${row('📱 WhatsApp Number', whatsapp)}
      ${segmentRows}
    </div>
    <div class="footer">
      <p style="margin:0;">Submitted via Golden Tree Life Spaces website form</p>
      <p style="margin:8px 0 0;">© ${new Date().getFullYear()} Golden Tree Life Spaces. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
            `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Email API Error:', error);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
