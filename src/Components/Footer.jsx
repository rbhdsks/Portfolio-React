import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
import github from "../Images/github.png";
import googlescholar from "../Images/googlescholar.png"

export default function Footer (){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        </div>
        <div className="social-icons">
        <a href="mailto:sirali.nitesh@gmail.com"><img src={mail}/></a>
            <a href="https://www.linkedin.com/in/niteshkumarshah/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://github.com/rbhdsks" target="_blank"><img src={github} alt="LinkedIn" /></a>
            <a href="https://scholar.google.com/citations?user=fIE13rIAAAAJ&hl=en" target="_blank"><img src={googlescholar} alt="Google Scholar" /></a>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} Nitesh Kumar Shah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

