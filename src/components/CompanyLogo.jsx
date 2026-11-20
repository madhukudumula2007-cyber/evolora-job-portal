
import React from "react";

const companyLogos = {
  Google: "https://commons.wikimedia.org/wiki/Special:FilePath/Google_2026_logo.svg",
  Microsoft: "https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft.svg",
  Amazon: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_2024.svg",
  Infosys: "https://commons.wikimedia.org/wiki/Special:FilePath/Infosys_logo.svg",
  TCS: "https://commons.wikimedia.org/wiki/Special:FilePath/TATA_Consultancy_Services_Logo.svg",
  Accenture: "https://commons.wikimedia.org/wiki/Special:FilePath/Accenture.svg",
  IBM: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM_logo.svg"
};

function CompanyLogo({ name }) {
  return (
    <div className="company-mark company-logo">
      <img
        src={companyLogos[name]}
        alt={`${name} company logo`}
        className={`company-logo-image logo-${name.toLowerCase()}`}
      />
    </div>
  );
}

export default CompanyLogo;
