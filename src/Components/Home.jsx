import profilepic from "../Images/nitesh.jpeg"
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";
import googlescholar from "../Images/googlescholar.png"
export default function Home(){
    return(
        <div className="home" id = "Home">
        <div>
            <img
            src= {profilepic}
            alt="Profile"
            className="profilepic"
            />
            <h2 className="profile-name">Nitesh Kumar Shah</h2>
            <p className="profile-title"> Student | ML enthusiast</p>
            <div className="social-icons">
            <a href="mailto:sirali.nitesh@gmail.com"><img src={mail}/></a>
            <a href="https://www.linkedin.com/in/niteshkumarshah/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/rbhdsks" target="_blank"><img src={github} /></a>
            <a href="https://scholar.google.com/citations?user=fIE13rIAAAAJ&hl=en" target="_blank"><img src={googlescholar} alt="Google Scholar" /></a>

            </div>
        </div>
      </div>
    )
};
