import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { jobs, companies } from "../data/jobsData";

function Jobs() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = (params.get("search") || "").toLowerCase();
  const city = (params.get("location") || "").toLowerCase();

  const [selectedCompany, setSelectedCompany] = useState("All Companies");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSalary, setSelectedSalary] = useState("All Salary Levels");
  const [sortBy, setSortBy] = useState("Default");

  const filteredJobs = useMemo(() => {
    const result = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.category.toLowerCase().includes(search) ||
        job.skills.some((skill) => skill.toLowerCase().includes(search));
      const matchesLocation = job.location.toLowerCase().includes(city);
      const matchesCompany = selectedCompany === "All Companies" || job.company === selectedCompany;
      const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory;
      let matchesSalary = true;
      if (selectedSalary === "Below 5 LPA") matchesSalary = job.salaryValue < 5;
      if (selectedSalary === "5 - 8 LPA") matchesSalary = job.salaryValue >= 5 && job.salaryValue <= 8;
      if (selectedSalary === "Above 8 LPA") matchesSalary = job.salaryValue > 8;
      return matchesSearch && matchesLocation && matchesCompany && matchesCategory && matchesSalary;
    });
    if (sortBy === "Salary: Low to High") result.sort((a, b) => a.salaryValue - b.salaryValue);
    if (sortBy === "Salary: High to Low") result.sort((a, b) => b.salaryValue - a.salaryValue);
    return result;
  }, [search, city, selectedCompany, selectedCategory, selectedSalary, sortBy]);

  return (
    <div className="jobs-page">
      <div className="jobs-heading">
        <span className="section-tag">Evolora OPPORTUNITIES</span>
        <h1>Explore roles across leading companies</h1>
        <p>{filteredJobs.length} sample job listings across {companies.length} companies. These are illustrative listings, not verified live vacancies.</p>
      </div>

      <div className="job-filters company-job-filters">
        <div className="filter-group">
          <label htmlFor="company-filter">COMPANY</label>
          <select id="company-filter" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
            <option>All Companies</option>
            {companies.map((company) => <option key={company.id}>{company.name}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="category-filter">CATEGORY</label>
          <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option>All Categories</option>
            {["Development", "Design", "Data Science", "Marketing", "Business"].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="salary-filter">SALARY LEVEL</label>
          <select id="salary-filter" value={selectedSalary} onChange={(e) => setSelectedSalary(e.target.value)}>
            <option>All Salary Levels</option><option>Below 5 LPA</option><option>5 - 8 LPA</option><option>Above 8 LPA</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="sort-filter">SORT BY</label>
          <select id="sort-filter" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Default</option><option>Salary: Low to High</option><option>Salary: High to Low</option>
          </select>
        </div>
      </div>

      <div className="job-list">
        {filteredJobs.length ? filteredJobs.map((job) => (
          <Link to={`/jobs/${job.id}`} className="job-link" key={job.id}>
            <div className="job-card">
              <img src={job.image} alt={job.title} className="job-image" />
              <div className="job-content">
                <div className="job-card-top"><div>
                  <span className="job-category">{job.category}</span>
                  <h2>{job.title}</h2>
                  <p className="company-name">{job.company}</p>
                </div><span className="job-type">{job.type}</span></div>
                <div className="job-skills">{job.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
                <div className="job-info"><span>📍 {job.location}</span><span>💰 {job.salary}</span></div>
                <p className="job-view">View Details →</p>
              </div>
            </div>
          </Link>
        )) : <div className="no-jobs"><h2>No jobs found</h2><p>Try changing your search or filter options.</p><Link to="/jobs">View all jobs</Link></div>}
      </div>
    </div>
  );
}
export default Jobs;
