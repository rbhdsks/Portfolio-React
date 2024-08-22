import Publicationslist from "../Jsonfiles/Publications.json";

export default function Publications() {
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
            <span><a href={paper.paperlink} target="_blank" rel="noopener noreferrer">Link</a></span>
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