import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// ✅ COMPLETE FIXED CORS CONFIG - READY TO PASTE
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// ✅ Explicit OPTIONS handler
app.options('*', cors());

app.use(express.json());

// -------- SEND EMAIL ROUTE -----------
app.post("/send-email", async (req, res) => {
  const { from_name, from_email, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AS Consultancy Website" <${process.env.MAIL_USER}>`,
      to: "asconsultancyuttarakhand@gmail.com",
      replyTo: from_email,
      subject: `New enquiry from ${from_name}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email failed" });
  }
});

// -------- TEST ROUTE -----------
app.get("/test", (req, res) => {
  res.json({ message: "Backend OK" });
});

// -------- START SERVER ----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
