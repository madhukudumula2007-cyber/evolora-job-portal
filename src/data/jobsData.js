
export const companies = [
  {
    id: "google",
    name: "Google",
    industry: "Technology & Internet",
    location: "Bangalore",
    initials: "G",
    description: "Sample technology roles across software, cloud, data and product teams."
  },
  {
    id: "microsoft",
    name: "Microsoft",
    industry: "Software & Cloud",
    location: "Hyderabad",
    initials: "M",
    description: "Sample roles in software engineering, cloud, security and business."
  },
  {
    id: "amazon",
    name: "Amazon",
    industry: "E-commerce & Cloud",
    location: "Chennai",
    initials: "A",
    description: "Sample opportunities in technology, operations, design and analytics."
  },
  {
    id: "infosys",
    name: "Infosys",
    industry: "IT Services & Consulting",
    location: "Pune",
    initials: "I",
    description: "Sample IT services roles across development, testing and consulting."
  },
  {
    id: "tcs",
    name: "TCS",
    industry: "IT Services & Consulting",
    location: "Chennai",
    initials: "T",
    description: "Sample enterprise technology, data and business roles."
  },
  {
    id: "accenture",
    name: "Accenture",
    industry: "Consulting & Technology",
    location: "Bangalore",
    initials: "Ac",
    description: "Sample consulting, engineering, analytics and design roles."
  },
  {
    id: "ibm",
    name: "IBM",
    industry: "Technology & AI",
    location: "Bangalore",
    initials: "IBM",
    description: "Sample roles in AI, data, software, infrastructure and security."
  }
];

const roleSets = {
  Google: [
    ["Frontend Developer", "Development", "frontend-developer.png", ["HTML", "CSS", "JavaScript", "React"]],
    ["Backend Developer", "Development", "backend-developer.png", ["Java", "Python", "SQL", "Node.js"]],
    ["Full Stack Developer", "Development", "react-developer.png", ["React", "Node.js", "MongoDB", "REST APIs"]],
    ["Android Developer", "Development", "mobile-app-developer.png", ["Kotlin", "Android", "Java", "Firebase"]],
    ["Cloud Engineer", "Development", "cloud-engineer.png", ["GCP", "Linux", "Docker", "Networking"]],
    ["Data Analyst", "Data Science", "data-analyst.png", ["SQL", "Python", "Excel", "Power BI"]],
    ["Machine Learning Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "TensorFlow", "ML", "Statistics"]],
    ["Data Scientist", "Data Science", "data-science-intern.png", ["Python", "Pandas", "Scikit-learn", "SQL"]],
    ["UI/UX Designer", "Design", "ui-ux-designer.png", ["Figma", "Wireframing", "Prototyping", "UX Research"]],
    ["Product Designer", "Design", "product-designer.png", ["Figma", "UI Design", "UX Research", "Prototyping"]],
    ["Technical Program Manager", "Business", "business-analyst.png", ["Agile", "Planning", "Communication", "Jira"]],
    ["Business Analyst", "Business", "business-analyst.png", ["SQL", "Excel", "Power BI", "Requirements"]],
    ["Cyber Security Analyst", "Development", "cyber-security-analyst.png", ["Security", "Linux", "Python", "Networking"]],
    ["Technical Writer", "Marketing", "content-writer.png", ["Writing", "Research", "Editing", "Documentation"]],
    ["Software Test Engineer", "Development", "java-developer.png", ["Testing", "Java", "Selenium", "SQL"]]
  ],

  Microsoft: [
    ["Software Engineer", "Development", "backend-developer.png", ["C#", "Java", "Algorithms", "Git"]],
    ["Frontend Developer", "Development", "frontend-developer.png", ["HTML", "CSS", "JavaScript", "React"]],
    ["Full Stack Developer", "Development", "react-developer.png", ["React", "C#", "SQL", "REST APIs"]],
    ["Azure Cloud Engineer", "Development", "cloud-engineer.png", ["Azure", "Linux", "Docker", "Networking"]],
    ["DevOps Engineer", "Development", "cloud-engineer.png", ["Azure", "Docker", "Kubernetes", "CI/CD"]],
    ["Data Engineer", "Data Science", "data-analyst.png", ["Python", "SQL", "ETL", "Spark"]],
    ["Data Scientist", "Data Science", "data-science-intern.png", ["Python", "Statistics", "ML", "Pandas"]],
    ["AI Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "Azure AI", "ML", "NLP"]],
    ["Security Engineer", "Development", "cyber-security-analyst.png", ["Security", "Networking", "Linux", "Cloud"]],
    ["UX Designer", "Design", "ui-ux-designer.png", ["Figma", "User Research", "Prototyping", "Accessibility"]],
    ["Product Manager", "Business", "business-analyst.png", ["Roadmapping", "Agile", "Analytics", "Communication"]],
    ["Business Analyst", "Business", "business-analyst.png", ["Excel", "SQL", "Power BI", "Documentation"]],
    ["Technical Support Engineer", "Development", "backend-developer.png", ["Troubleshooting", "Windows", "Networking", "PowerShell"]],
    ["Technical Content Writer", "Marketing", "content-writer.png", ["Writing", "Editing", "Research", "Documentation"]],
    ["Software Test Engineer", "Development", "java-developer.png", ["Testing", "C#", "Selenium", "Automation"]]
  ],

  Amazon: [
    ["Software Development Engineer", "Development", "backend-developer.png", ["Java", "Python", "DSA", "AWS"]],
    ["Frontend Engineer", "Development", "frontend-developer.png", ["JavaScript", "React", "HTML", "CSS"]],
    ["Backend Engineer", "Development", "python-developer.png", ["Java", "Node.js", "SQL", "APIs"]],
    ["Cloud Support Engineer", "Development", "cloud-engineer.png", ["AWS", "Linux", "Networking", "Troubleshooting"]],
    ["DevOps Engineer", "Development", "react-developer.png", ["AWS", "Docker", "CI/CD", "Linux"]],
    ["Data Analyst", "Data Science", "data-analyst.png", ["SQL", "Excel", "Python", "QuickSight"]],
    ["Business Intelligence Engineer", "Data Science", "data-science-intern.png", ["SQL", "Data Modeling", "Python", "BI"]],
    ["Machine Learning Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "ML", "PyTorch", "Statistics"]],
    ["UX Designer", "Design", "ui-ux-designer.png", ["Figma", "Prototyping", "User Research", "Design Systems"]],
    ["Visual Designer", "Design", "graphic-designer.png", ["Photoshop", "Illustrator", "Typography", "Branding"]],
    ["Operations Analyst", "Business", "business-analyst.png", ["Excel", "Reporting", "Analytics", "Communication"]],
    ["Program Manager", "Business", "hr-executive.png", ["Planning", "Agile", "Stakeholder Management", "Jira"]],
    ["Information Security Analyst", "Development", "cyber-security-analyst.png", ["Security", "Risk", "Linux", "Networking"]],
    ["Content Strategist", "Marketing", "content-writer.png", ["Content", "SEO", "Research", "Editing"]],
    ["Quality Assurance Engineer", "Development", "java-developer.png", ["Testing", "Automation", "Java", "Selenium"]]
  ],

  Infosys: [
    ["Java Developer", "Development", "java-developer.png", ["Java", "Spring Boot", "JDBC", "MySQL"]],
    ["Python Developer", "Development", "python-developer.png", ["Python", "Django", "SQL", "Git"]],
    ["Frontend Developer", "Development", "frontend-developer.png", ["HTML", "CSS", "JavaScript", "React"]],
    ["React Developer", "Development", "react-developer.png", ["React", "JavaScript", "HTML", "CSS"]],
    [".NET Developer", "Development", "backend-developer.png", ["C#", ".NET", "SQL", "APIs"]],
    ["Cloud Engineer", "Development", "cloud-engineer.png", ["AWS", "Azure", "Linux", "Docker"]],
    ["DevOps Engineer", "Development", "mobile-app-developer.png", ["Jenkins", "Docker", "Kubernetes", "Linux"]],
    ["Data Analyst", "Data Science", "data-analyst.png", ["SQL", "Python", "Excel", "Power BI"]],
    ["Data Scientist", "Data Science", "data-science-intern.png", ["Python", "ML", "Pandas", "Statistics"]],
    ["Machine Learning Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "TensorFlow", "ML", "SQL"]],
    ["UI/UX Designer", "Design", "ui-ux-designer.png", ["Figma", "Wireframing", "Prototyping", "Research"]],
    ["Business Analyst", "Business", "business-analyst.png", ["Requirements", "SQL", "Excel", "Communication"]],
    ["Cyber Security Analyst", "Development", "cyber-security-analyst.png", ["Network Security", "Linux", "SIEM", "Python"]],
    ["Software Tester", "Development", "graphic-designer.png", ["Manual Testing", "Selenium", "SQL", "Jira"]],
    ["Technical Writer", "Marketing", "content-writer.png", ["Writing", "Editing", "Research", "Documentation"]]
  ],

  TCS: [
    ["Assistant System Engineer", "Development", "java-developer.png", ["Java", "C", "SQL", "Problem Solving"]],
    ["Java Developer", "Development", "java-developer.png", ["Java", "Spring", "SQL", "REST APIs"]],
    ["Python Developer", "Development", "python-developer.png", ["Python", "Django", "SQL", "Git"]],
    ["Frontend Developer", "Development", "frontend-developer.png", ["HTML", "CSS", "JavaScript", "React"]],
    ["Full Stack Developer", "Development", "react-developer.png", ["React", "Node.js", "SQL", "APIs"]],
    ["Cloud Engineer", "Development", "cloud-engineer.png", ["AWS", "Azure", "Linux", "Networking"]],
    ["System Administrator", "Development", "mobile-app-developer.png", ["Linux", "Windows Server", "Networking", "Shell"]],
    ["Data Analyst", "Data Science", "data-analyst.png", ["SQL", "Excel", "Python", "Tableau"]],
    ["Data Scientist", "Data Science", "data-science-intern.png", ["Python", "Statistics", "ML", "Pandas"]],
    ["AI/ML Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "ML", "TensorFlow", "NLP"]],
    ["UI/UX Designer", "Design", "ui-ux-designer.png", ["Figma", "User Research", "Wireframes", "Prototyping"]],
    ["Business Analyst", "Business", "business-analyst.png", ["Excel", "SQL", "Requirements", "Power BI"]],
    ["Cyber Security Analyst", "Development", "cyber-security-analyst.png", ["Security", "Linux", "Networking", "Risk"]],
    ["Test Engineer", "Development", "graphic-designer.png", ["Testing", "Selenium", "Java", "SQL"]],
    ["HR Executive", "Business", "hr-executive.png", ["Recruitment", "Communication", "Excel", "HR Management"]]
  ],

  Accenture: [
    ["Application Developer", "Development", "backend-developer.png", ["Java", "Python", "SQL", "APIs"]],
    ["React Developer", "Development", "react-developer.png", ["React", "JavaScript", "HTML", "CSS"]],
    ["Java Full Stack Developer", "Development", "java-developer.png", ["Java", "Spring Boot", "React", "MySQL"]],
    ["Python Developer", "Development", "python-developer.png", ["Python", "Django", "REST APIs", "SQL"]],
    ["Cloud Engineer", "Development", "cloud-engineer.png", ["AWS", "Azure", "Docker", "Linux"]],
    ["DevOps Engineer", "Development", "mobile-app-developer.png", ["Jenkins", "Docker", "Kubernetes", "CI/CD"]],
    ["Data Analyst", "Data Science", "data-analyst.png", ["SQL", "Python", "Power BI", "Excel"]],
    ["Data Engineer", "Data Science", "data-science-intern.png", ["Python", "SQL", "ETL", "Spark"]],
    ["Machine Learning Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "ML", "TensorFlow", "Statistics"]],
    ["UI/UX Designer", "Design", "ui-ux-designer.png", ["Figma", "Prototyping", "Research", "Design Systems"]],
    ["Business Analyst", "Business", "business-analyst.png", ["Requirements", "Excel", "SQL", "Agile"]],
    ["Technology Consultant", "Business", "hr-executive.png", ["Consulting", "Cloud", "Analysis", "Communication"]],
    ["Cyber Security Analyst", "Development", "cyber-security-analyst.png", ["Security", "SIEM", "Networking", "Linux"]],
    ["Digital Marketing Analyst", "Marketing", "digital-marketing.png", ["SEO", "Analytics", "Campaigns", "Content"]],
    ["Quality Engineer", "Development", "graphic-designer.png", ["Testing", "Automation", "Selenium", "Agile"]]
  ],

  IBM: [
    ["Software Engineer", "Development", "backend-developer.png", ["Java", "Python", "Git", "Algorithms"]],
    ["Full Stack Developer", "Development", "react-developer.png", ["React", "Node.js", "SQL", "APIs"]],
    ["Java Developer", "Development", "java-developer.png", ["Java", "Spring Boot", "JDBC", "SQL"]],
    ["Python Developer", "Development", "python-developer.png", ["Python", "Flask", "Django", "SQL"]],
    ["Cloud Engineer", "Development", "cloud-engineer.png", ["IBM Cloud", "Linux", "Docker", "Networking"]],
    ["DevOps Engineer", "Development", "mobile-app-developer.png", ["Kubernetes", "Docker", "Jenkins", "Linux"]],
    ["Data Engineer", "Data Science", "data-analyst.png", ["Python", "SQL", "ETL", "Spark"]],
    ["Data Scientist", "Data Science", "data-science-intern.png", ["Python", "Statistics", "ML", "Pandas"]],
    ["AI Engineer", "Data Science", "machine-learning-engineer.png", ["Python", "AI", "NLP", "TensorFlow"]],
    ["Cyber Security Analyst", "Development", "cyber-security-analyst.png", ["Security", "SIEM", "Linux", "Networking"]],
    ["UX Designer", "Design", "ui-ux-designer.png", ["Figma", "User Research", "Prototyping", "Accessibility"]],
    ["Product Manager", "Business", "business-analyst.png", ["Roadmaps", "Agile", "Analytics", "Communication"]],
    ["Business Analyst", "Business", "business-analyst.png", ["SQL", "Excel", "Power BI", "Requirements"]],
    ["Technical Writer", "Marketing", "content-writer.png", ["Writing", "Editing", "Research", "Documentation"]],
    ["Software Test Engineer", "Development", "graphic-designer.png", ["Testing", "Automation", "Java", "Selenium"]]
  ]
};

const locations = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Mumbai"
];

const salaryBands = [
  "₹4 - 7 LPA",
  "₹5 - 8 LPA",
  "₹6 - 10 LPA",
  "₹7 - 12 LPA",
  "₹8 - 14 LPA"
];

// Keep only the first role using each image within a company.
const uniqueRoleSets = Object.fromEntries(
  Object.entries(roleSets).map(([companyName, roles]) => {
    const usedImages = new Set();

    const filteredRoles = roles.filter((role) => {
      const image = role[2];

      if (usedImages.has(image)) {
        return false;
      }

      usedImages.add(image);
      return true;
    });

    return [companyName, filteredRoles];
  })
);

let nextJobId = 1;

export const jobs = companies.flatMap((company, companyIndex) =>
  uniqueRoleSets[company.name].map((role, roleIndex) => {
    const [title, category, originalImage, skills] = role;

    const id = nextJobId++;

    const location =
      roleIndex === 0
        ? company.location
        : locations[(companyIndex + roleIndex) % locations.length];

    return {
      id,
      title,
      company: company.name,
      companyId: company.id,
      location,
      salary: salaryBands[(companyIndex + roleIndex) % salaryBands.length],
      salaryValue: [4, 5, 6, 7, 8][(companyIndex + roleIndex) % 5],
      type: "Full Time",
      category,
      image: `/images/${originalImage}`,
      skills,
      vacancies: (roleIndex % 4) + 1,
      description: `This is a sample ${title} role at ${company.name} for the Evolora academic project. The selected candidate will contribute to team projects, apply relevant technical or professional skills, collaborate with colleagues and help deliver reliable solutions. This illustrative description is not an official company vacancy.`,
      responsibilities: [
        `Work on assigned ${title.toLowerCase()} tasks and project deliverables.`,
        "Collaborate with team members and communicate progress clearly.",
        "Test, document and improve the quality of completed work."
      ],
      isSample: true
    };
  })
);

export const getCompanyById = (companyId) =>
  companies.find(
    (company) =>
      company.id.toLowerCase() === String(companyId).toLowerCase()
  );

export const getJobsByCompany = (companyName) =>
  jobs.filter(
    (job) =>
      job.company.toLowerCase() === String(companyName).toLowerCase()
  );
