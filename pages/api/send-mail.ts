import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import mjml2html from "mjml";

// Create transporter once (with pooling enabled)
const transporter = nodemailer.createTransport({
  service: "gmail",
  pool: true,
  maxConnections: 50,
  maxMessages: 1000,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    movingType,
    originAddress,
    destinationAddress,
    moveDate,
    additionalInfo,
  } = req.body;

  if (!name || !email || !phone || !movingType || !originAddress || !destinationAddress) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Respond immediately so user doesn’t wait
  res.status(200).json({ message: "Request received. Sending emails..." });

  try {
    // MJML template for admin email
    const adminMJML = `
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text font-size="20px" font-weight="bold">New Quote Request Details</mj-text>
              <mj-text><strong>Name:</strong> ${name}</mj-text>
              <mj-text><strong>Email:</strong> ${email}</mj-text>
              <mj-text><strong>Phone:</strong> ${phone}</mj-text>
              <mj-text><strong>Moving Type:</strong> ${movingType}</mj-text>
              <mj-text><strong>Origin Address:</strong> ${originAddress}</mj-text>
              <mj-text><strong>Destination Address:</strong> ${destinationAddress}</mj-text>
              <mj-text><strong>Move Date:</strong> ${moveDate || "Not specified"}</mj-text>
              <mj-text><strong>Additional Info:</strong> ${additionalInfo || "None"}</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `;
    const { html: adminHtml } = mjml2html(adminMJML);

    // MJML template for user auto-reply
    const userMJML = `
      <mjml>
        <mj-body>
          <mj-section background-color="#f0ad4e" padding="10px 0">
            <mj-column>
              <mj-image width="150px" src="public\images\logo.png" alt="GoldStar Movers Logo" />
            </mj-column>
          </mj-section>
          <mj-section background-color="#ffffff" padding="20px">
            <mj-column>
              <mj-text font-size="20px" font-weight="bold" color="#333">Thank You, ${name}!</mj-text>
              <mj-text color="#555">
                We appreciate you reaching out for a moving quote. Our team will review your request and contact you soon by phone or email.
              </mj-text>
              <mj-text color="#555">
                If you have any questions in the meantime, feel free to reply to this email.
              </mj-text>
              <mj-divider border-color="#f0ad4e" />
              <mj-text font-weight="bold" color="#333">Best regards,<br/>GoldStar Movers Team</mj-text>
              <mj-text font-size="12px" color="#888">&copy; ${new Date().getFullYear()} GoldStar Movers. All rights reserved.</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `;
    const { html: userHtml } = mjml2html(userMJML);

    // Mail options for admin and user
    const mailOptionsToAdmin = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Moving Quote Request from ${name}`,
      html: adminHtml,
    };

    const mailOptionsToUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for your moving quote request",
      html: userHtml,
    };

    // Send emails asynchronously (after response sent)
    transporter.sendMail(mailOptionsToAdmin).catch(console.error);
    transporter.sendMail(mailOptionsToUser).catch(console.error);

  } catch (error) {
    console.error("Error sending emails:", error);
  }
}
