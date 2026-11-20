
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../data/jobsData";

function JobDetails() {
  const { id } = useParams();

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get the selected job from the same dataset used by Jobs.jsx
  const job = jobs.find(
    (item) => String(item.id) === String(id)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!job) {
      setError("Job details could not be found.");
      return;
    }

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const resumeFile = formData.get("resume");

    if (!resumeFile || resumeFile.size === 0) {
      setError("Please upload your resume.");
      setLoading(false);
      return;
    }

    const application = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      applicantName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      resumeFileName: resumeFile.name,
      appliedAt: new Date().toISOString()
    };

    try {
      // STEP 1: Save application details in JSON Server
      const response = await fetch(
        "http://localhost:3000/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(application)
        }
      );

      if (!response.ok) {
        throw new Error("Application could not be saved.");
      }

      // STEP 2: Add applicant and job details to FormData
      // The actual resume file is already included.
      formData.append("applicantName", application.applicantName);
      formData.append("applicantEmail", application.email);
      formData.append("phone", application.phone);
      formData.append("jobTitle", application.jobTitle);
      formData.append("company", application.company);

      formData.append(
        "appliedAt",
        new Date(application.appliedAt).toLocaleString()
      );

      // STEP 3: Send details and resume together in one email
      const emailResponse = await fetch(
        "http://localhost:5000/send-email",
        {
          method: "POST",
          body: formData
        }
      );

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(
          emailResult.message || "Email sending failed."
        );
      }

      // STEP 4: Show success after email is sent
      setSubmitted(true);
      setShowForm(false);
      form.reset();

    } catch (err) {
      console.error("Application submission error:", err);

      setError(
        err.message ||
        "Unable to submit your application. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // Handle invalid job IDs
  if (!job) {
    return (
      <div className="jobs-page">
        <div className="no-jobs">
          <h2>Job not found</h2>
          <p>The job you are looking for does not exist.</p>
          <Link to="/jobs">Back to Jobs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="jobs-page">

      <div className="job-details">

        <Link to="/jobs" className="job-view">
          ← Back to Jobs
        </Link>

        <div className="job-card">

          <img
            src={job.image}
            alt={job.title}
            className="job-image"
          />

          <div className="job-content">

            <span className="job-category">
              {job.category}
            </span>

            <h1>{job.title}</h1>

            <p className="company-name">
              {job.company}
            </p>

            <div className="job-info">
              <span>📍 {job.location}</span>
              <span>💰 {job.salary}</span>
              <span>{job.type}</span>
            </div>

            <h2>Job Description</h2>
            <p>{job.description}</p>

            <h2>Required Skills</h2>

            <div className="job-skills">
              {job.skills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>

            <h2>Responsibilities</h2>

            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {!submitted && (
              <button
                type="button"
                onClick={() => {
                  setShowForm(!showForm);
                  setError("");
                }}
              >
                {showForm
                  ? "Close Application Form"
                  : "Apply Now"}
              </button>
            )}

            {submitted && (
              <div className="application-success">
                <h3>Application Submitted Successfully!</h3>
                <p>
                  Your application for {job.title} at {job.company}
                  has been recorded. Your resume has also been
                  sent by email.
                </p>
              </div>
            )}

            {error && (
              <p className="application-error">
                {error}
              </p>
            )}

            {showForm && !submitted && (
              <div className="application-form">

                <h2>Apply for {job.title}</h2>

                <form onSubmit={handleSubmit}>

                  <label htmlFor="fullName">
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter 10-digit phone number"
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    required
                  />

                  <label htmlFor="resume">
                    Upload Resume
                  </label>

                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />

                  <button
                    type="submit"
                    disabled={loading}
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>

                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
