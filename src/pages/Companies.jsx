
import React from "react";
import { Link } from "react-router-dom";
import { companies, getJobsByCompany } from "../data/jobsData";
import CompanyLogo from "../components/CompanyLogo";

function Companies() {
  return (
    <main className="companies-page">
      <header className="companies-heading">
        <span className="section-tag">EXPLORE EMPLOYERS</span>
        <h1>Find opportunities by company</h1>
        <p>Explore sample roles from seven featured companies on Evolora.</p>
      </header>

      <section className="companies-grid">
        {companies.map((company) => (
          <Link
            className="company-card"
            to={`/companies/${company.id}`}
            key={company.id}
          >
            <CompanyLogo name={company.name} />

            <div className="company-card-copy">
              <h2>{company.name}</h2>
              <p>{company.industry}</p>
              <span>📍 {company.location}</span>
            </div>

            <div className="company-card-bottom">
              <strong>
                {getJobsByCompany(company.name).length} sample roles
              </strong>
              <span>Explore company →</span>
            </div>
          </Link>
        ))}
      </section>

      <p className="sample-disclaimer">
        Project demonstration data only. These listings do not represent
        confirmed openings or hiring activity at the named companies.
      </p>
    </main>
  );
}

export default Companies;
