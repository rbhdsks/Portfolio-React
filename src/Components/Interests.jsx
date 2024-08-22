import Interestslist from "../Jsonfiles/Interests.json";

export default function Interests (){
    return(
        <div className="interests">
            <h1 className="subheading">Interests</h1>
            <ul>
                {Interestslist.map((item) => (
                <li key={item.id}>{item.topic}</li>
                ))}
            </ul>
        </div>
    )
}