import Educationlist from "../Jsonfiles/Education.json"
import hat from "../Images/education.svg"
export default function Education (){
    return(
        <div className="educationdetails">
            <h1 className="subheading">Education</h1>
            <ul className="education">
                {Educationlist.map((item) => (

                    <li key={item.id}>
                        <img src={hat} alt="graducationcap" className="hat-image"/>
                        <div>
                        <span><b>{item.qualification}</b></span><br />
                        <span>{item.institution}</span>

                        </div>
                </li>
            ))}
            </ul>
        </div>
    )
}