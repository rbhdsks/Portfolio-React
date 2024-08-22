import Experiencelist from "../Jsonfiles/Experience.json";

export default function Experience(){
    return(
        <div className="experience">
            <div>
                <h1 className="heading">Work Experience</h1>
                    <ul className="experience-ul">
                    {Experiencelist.map((item) => (
                        <li key={item.id} className="experiencelist">
                        <p className= "subheading1">{item.position}</p>
                        <p><strong>Company:</strong> {item.company}</p>
                        <p><strong>Duration:</strong> {item.duration}</p>
                        <p><strong>Place:</strong> {item.place}</p>
                        <ul>
                        {item.points.map((point, index) => (
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