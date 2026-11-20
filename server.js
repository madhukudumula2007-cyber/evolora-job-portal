
import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import jsonServer from "json-server";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(jsonServer.bodyParser);

// Database configuration
const dbPath = path.join(__dirname, "db.json");
const router = jsonServer.router(dbPath);

// Database API
app.use("/api", router);

// Resume upload configuration
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
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

// Gmail configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send application email with resume attachment
app.post("/send-email", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Resume is required."
      });
    }

    const {
      applicantName,
      applicantEmail,
      phone,
      jobTitle,
      company,
      appliedAt
    } = req.body;

    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVE_EMAIL
    ) {
      return res.status(500).json({
        message: "Email configuration is missing."
      });
    }

    await transporter.sendMail({
      from: `"Evolora Job Portal" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVE_EMAIL,
      subject: `New Job Application - ${jobTitle}`,

      text: `
A new job application has been submitted on Evolora.

APPLICANT DETAILS:

Name: ${applicantName}
Email: ${applicantEmail}
Phone: ${phone}

JOB DETAILS:

Job Title: ${jobTitle}
Company: ${company}
Applied At: ${appliedAt}
      `,

      attachments: [
        {
          filename: path.basename(req.file.originalname),
          content: req.file.buffer,
          contentType: req.file.mimetype
        }
      ]
    });

    return res.json({
      message: "Email and resume sent successfully!"
    });

  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      message: "Email sending failed."
    });
  }
});

// Backend health check
app.get("/", (req, res) => {
  res.send("Evolora backend is running!");
});

// Error handling
app.use((error, req, res, next) => {
  console.error("Server error:", error.message);

  res.status(400).json({
    message: error.message || "Something went wrong."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Evolora backend running on port ${PORT}`);
});
