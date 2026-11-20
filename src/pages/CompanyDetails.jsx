
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCompanyById,
  getJobsByCompany
} from "../data/jobsData";
import CompanyLogo from "../components/CompanyLogo";

function CompanyDetails() {
  const { companyId } = useParams();
  const company = getCompanyById(companyId);

  if (!company) {
    return (
      <main className="companies-page">
        <div className="no-jobs">
          <h2>Company not found</h2>
          <Link to="/companies">Back to companies</Link>
        </div>
      </main>
    );
  }

  const companyJobs = getJobsByCompany(company.name);

  return (
    <main className="companies-page">
      <Link to="/companies" className="job-view">
        ← All Companies
      </Link>

      <section className="company-profile">
        <CompanyLogo name={company.name} />

        <div>
          <span className="section-tag">COMPANY PROFILE</span>
          <h1>{company.name}</h1>
          <p>{company.industry} · {company.location}</p>
          <p>{company.description}</p>
        </div>
      </section>

      <div className="company-roles-heading">
        <h2>Sample roles at {company.name}</h2>
        <span>{companyJobs.length} roles</span>
      </div>

      <div className="job-list">
        {companyJobs.map((job) => (
          <Link
            to={`/jobs/${job.id}`}
            className="job-link"
            key={job.id}
          >
            <div className="job-card">
              <img
                src={job.image}
                alt={job.title}
                className="job-image"
              />

              <div className="job-content">
                <span className="job-category">{job.category}</span>
                <h2>{job.title}</h2>
                <p className="company-name">{job.company}</p>

                <div className="job-skills">
                  {job.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="job-info">
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                </div>

                <p className="job-view">View Details →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="sample-disclaimer">
        Illustrative project listings only; not verified live vacancies.
      </p>
    </main>
  );
}

export default CompanyDetails;
