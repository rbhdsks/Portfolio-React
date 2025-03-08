import React from "react";

export default function Publications() {
  // Updated list with only the two new papers
  const Publicationslist = [
    {
      id: 244,
      title: "A Novel Adaptation of the UNIT Framework for Cross-Domain Climate Data Translation with Enhanced Feature Preservation",
      authors: "Nitesh Kumar Shah, …", // Add/update full author list if needed
      paperlink: "#", // Replace '#' with your actual paper link or DOI
      points: [
        { p: "Accepted at the 12th International Conference on Signal Processing & Integrated Networks (SPIN 2025)." },
        { p: "Conference Dates: 20–21 February 2025, Amity University, Noida." },
        { p: "Focuses on cross-domain climate data translation, incorporating land masks for improved geospatial accuracy." },
      ],
    },
    {
      id: 478,
      title: "An Efficient ADAS Framework for Cross-Domain Image Translation and Feature Preservation Utilizing CycleGAN",
      authors: "Nitesh Kumar Shah, …", // Add/update full author list if needed
      paperlink: "#", // Replace '#' with your actual paper link or DOI
      points: [
        { p: "Accepted at the 15th International Conference on Cloud Computing, Data Science and Engineering (CONFLUENCE 2025)." },
        { p: "Conference Dates: 16–17 January 2025, Amity University, Noida." },
        { p: "Proposes a CycleGAN-based approach for ADAS frameworks, focusing on domain adaptation and feature preservation." },
      ],
    },
  ];

  return (
    <div className="publications">
      <div>
        <h1 className="heading">Publications</h1>
        <ul>
          {Publicationslist.map((paper) => (
            <li key={paper.id}>
              <span className="subheading1">{paper.title}</span>
              <br />
              <span>{paper.authors}</span>
              <br />
              <span>
                <a 
                  href={paper.paperlink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </span>
              <br />
              <ul>
                {paper.points.map((point, index) => (
                  <li key={index}>{point.p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
