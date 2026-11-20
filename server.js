
import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("Gmail user:", process.env.EMAIL_USER);
console.log("App password loaded:", !!process.env.EMAIL_PASS);
console.log("Password length:", process.env.EMAIL_PASS?.length);

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC and DOCX files are allowed."));
    }
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post("/send-email", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume is required." });
    }

    const {
      applicantName,
      applicantEmail,
      phone,
      jobTitle,
      company,
      appliedAt
    } = req.body;

    await transporter.sendMail({
      from: `"Evolora Job Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVE_EMAIL,
      subject: `New Job Application - ${jobTitle}`,
      text: `
A new job application has been submitted on Evolora.

APPLICANT DETAILS:
Name: ${applicantName}
Email: ${applicantEmail}
Phone: ${Array.isArray(phone) ? phone[0] : phone}

JOB DETAILS:
Job Title: ${jobTitle}
Company: ${company}
Applied At: ${appliedAt}
      `,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype
        }
      ]
    });

    res.json({ message: "Email and resume sent successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email sending failed." });
  }
});

app.use((error, req, res, next) => {
  res.status(400).json({ message: error.message });
});

app.listen(process.env.PORT || 5000, () =ac> {
  console.log("Email server running on port 5000");
});
