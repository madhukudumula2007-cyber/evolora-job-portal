
import express from "express";
import multer from "multer";
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

// Send application email using Brevo API
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
      jobTitle,
      company,
      appliedAt
    } = req.body;

    // Handle duplicate phone values sent by FormData
    const phoneValue = req.body.phone;
    const phone = Array.isArray(phoneValue)
      ? phoneValue[0]
      : phoneValue;

    // Check required environment variables
    if (
      !process.env.BREVO_API_KEY ||
      !process.env.EMAIL_USER ||
      !process.env.RECEIVE_EMAIL
    ) {
      return res.status(500).json({
        message: "Brevo email configuration is missing."
      });
    }

    // Prepare resume attachment in Base64 format
    const resumeBase64 = req.file.buffer.toString("base64");

    const emailData = {
      sender: {
        name: "Evolora Job Portal",
        email: process.env.EMAIL_USER
      },

      to: [
        {
          email: process.env.RECEIVE_EMAIL
        }
      ],

      replyTo: {
        email: applicantEmail,
        name: applicantName
      },

      subject: `New Job Application - ${jobTitle}`,

      textContent: `
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

      attachment: [
        {
          name: path.basename(req.file.originalname),
          content: resumeBase64
        }
      ]
    };

    // Send email through Brevo HTTP API
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          "accept": "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json"
        },

        body: JSON.stringify(emailData)
      }
    );

    const responseData = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error("Brevo API error:", responseData);

      return res.status(500).json({
        message:
          responseData.message ||
          "Brevo could not send the application email."
      });
    }

    console.log("Application email sent successfully through Brevo.");

    return res.json({
      message: "Application email and resume sent successfully!",
      messageId: responseData.messageId
    });

  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      message: "Email sending failed. Please try again."
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
