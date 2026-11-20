
import companies from "./companies";

const roleCatalog = {
  Google: [
    ["Frontend Developer", "Development"],
    ["Backend Developer", "Development"],
    ["Full Stack Developer", "Development"],
    ["Software Engineer", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Scientist", "Data Science"],
    ["Machine Learning Engineer", "Data Science"],
    ["AI Engineer", "Data Science"],
    ["Cloud Engineer", "Development"],
    ["DevOps Engineer", "Development"],
    ["UI/UX Designer", "Design"],
    ["Product Designer", "Design"],
    ["Business Analyst", "Business"],
    ["Technical Writer", "Marketing"],
    ["Cyber Security Analyst", "Development"],
  ],

  Microsoft: [
    ["Software Developer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["Full Stack Developer", "Development"],
    ["Cloud Solutions Engineer", "Development"],
    ["Azure Cloud Engineer", "Development"],
    ["DevOps Engineer", "Development"],
    ["Database Administrator", "Development"],
    ["Data Engineer", "Data Science"],
    ["AI Engineer", "Data Science"],
    ["Machine Learning Engineer", "Data Science"],
    ["Business Analyst", "Business"],
    ["Product Manager", "Business"],
    ["UI/UX Designer", "Design"],
    ["Technical Support Engineer", "Development"],
  ],

  Amazon: [
    ["Software Development Engineer", "Development"],
    ["Frontend Developer", "Development"],
    ["Backend Developer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["Cloud Support Engineer", "Development"],
    ["AWS Cloud Engineer", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Scientist", "Data Science"],
    ["Machine Learning Engineer", "Data Science"],
    ["Business Analyst", "Business"],
    ["Operations Analyst", "Business"],
    ["UI/UX Designer", "Design"],
    ["Product Manager", "Business"],
    ["Quality Assurance Engineer", "Development"],
  ],

  Infosys: [
    ["Systems Engineer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["Full Stack Developer", "Development"],
    ["React Developer", "Development"],
    ["Software Tester", "Development"],
    ["Automation Test Engineer", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Scientist", "Data Science"],
    ["Cloud Engineer", "Development"],
    ["DevOps Engineer", "Development"],
    ["Business Analyst", "Business"],
    ["UI/UX Designer", "Design"],
    ["Technical Support Engineer", "Development"],
    ["Cyber Security Analyst", "Development"],
  ],

  TCS: [
    ["Assistant System Engineer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["Web Developer", "Development"],
    ["React Developer", "Development"],
    ["Database Developer", "Development"],
    ["Software Tester", "Development"],
    ["Automation Test Engineer", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Engineer", "Data Science"],
    ["Cloud Engineer", "Development"],
    ["Cyber Security Analyst", "Development"],
    ["Business Analyst", "Business"],
    ["UI/UX Designer", "Design"],
    ["Technical Support Engineer", "Development"],
  ],

  Accenture: [
    ["Application Developer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["React Developer", "Development"],
    ["Full Stack Developer", "Development"],
    ["Software Engineer", "Development"],
    ["Cloud Engineer", "Development"],
    ["DevOps Engineer", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Scientist", "Data Science"],
    ["Machine Learning Engineer", "Data Science"],
    ["Business Analyst", "Business"],
    ["UI/UX Designer", "Design"],
    ["Cyber Security Analyst", "Development"],
    ["Quality Assurance Engineer", "Development"],
  ],

  IBM: [
    ["Software Engineer", "Development"],
    ["Java Developer", "Development"],
    ["Python Developer", "Development"],
    ["Full Stack Developer", "Development"],
    ["Cloud Engineer", "Development"],
    ["DevOps Engineer", "Development"],
    ["Cyber Security Analyst", "Development"],
    ["Data Analyst", "Data Science"],
    ["Data Scientist", "Data Science"],
    ["Machine Learning Engineer", "Data Science"],
    ["AI Engineer", "Data Science"],
    ["Database Administrator", "Development"],
    ["Business Analyst", "Business"],
    ["UI/UX Designer", "Design"],
    ["Technical Support Engineer", "Development"],
  ],
};

const skillsByCategory = {
  Development: [
    "Programming",
    "Problem Solving",
    "Git",
    "Debugging",
    "Database",
    "Software Development",
  ],
  "Data Science": [
    "Python",
    "SQL",
    "Statistics",
    "Data Analysis",
    "Machine Learning",
    "Data Visualization",
  ],
  Design: [
    "Figma",
    "Wireframing",
    "Prototyping",
    "UI Design",
    "UX Research",
    "Visual Design",
  ],
  Business: [
    "Communication",
    "Excel",
    "Problem Solving",
    "Analytical Skills",
    "Reporting",
    "Business Strategy",
  ],
  Marketing: [
    "Content Writing",
    "SEO",
    "Research",
    "Communication",
    "Digital Marketing",
    "Analytics",
  ],
};

const imagesByCategory = {
  Development: "/images/frontend-developer.png",
  "Data Science": "/images/data-analyst.png",
  Design: "/images/ui-ux-designer.png",
  Business: "/images/business-analyst.png",
  Marketing: "/images/digital-marketing.png",
};

const locations = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Mumbai",
  "Noida",
];

const jobs = companies.flatMap((company, companyIndex) =>
  roleCatalog[company.name].map(([title, category], roleIndex) => {
    const salaryValue = 3 + ((companyIndex + roleIndex) % 7);

    return {
      id: 101 + companyIndex * 15 + roleIndex,
      title,
      company: company.name,
      companyId: company.id,
      location: locations[(companyIndex + roleIndex) % locations.length],
      salary: `₹${salaryValue} - ${salaryValue + 3} LPA`,
      salaryValue,
      type: "Full Time",
      category,
      image: imagesByCategory[category],
      skills: skillsByCategory[category],
      isSample: true,
    };
  })
);

export default jobs;
