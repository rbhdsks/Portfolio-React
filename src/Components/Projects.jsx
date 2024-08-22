import projectData from "../Jsonfiles/Projects.json";

export default function Projects(){
    return (
        <div className="publications">
            <div>
            <h1 className="heading">Projects</h1>
                <ul>
                {projectData.map((project) => (
                    <li key={project.id} className="project-li">
                    <span className="subheading1">{project.title}</span>
                    <br />
                    <span>{project.subtitle}</span>
                    <br />
                    <span><strong>Key Technology:</strong> {project.keytechnology}</span> <br />
                    <span><a href={project.links} target="_blank" rel="noopener noreferrer"> Github Link</a></span>
                    <ul>
                    {project.points.map((point, index) => (
                        <li key={index}>{point.p}</li>
                    ))}
                    </ul>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}