import Publicationslist from "../Jsonfiles/Publications.json";

export default function Publications() {
  // Group papers by category
  const grouped = Publicationslist.reduce((acc, paper) => {
    if (!acc[paper.category]) {
      acc[paper.category] = [];
    }
    acc[paper.category].push(paper);
    return acc;
  }, {});

  return (
    <div className="publications">
      <h1 className="heading">Publications</h1>
      {Object.keys(grouped).map((category) => (
        <div key={category} className="category-section">
          <h2 className="subheading">{category}</h2>
          <ul>
            {grouped[category].map((paper) => (
              <li key={paper.id} className="paper-item">
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
                    {paper.linkdisplay || "Link"}
                  </a>
                </span>
                <br />
                {paper.points.length > 0 && (
                  <ul>
                    {paper.points.map((point, index) => (
                      <li key={index}>{point.p}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
