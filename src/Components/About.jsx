import Education from "./Education";
import Interests from "./Interests";

export default function About() {
  return (
    <div className="about-me">
      <h1 className="heading">About me</h1>
      <p>
      Hi! I am Nitesh, a passionate technology enthusiast, currently pursuing 
      a B.Tech in Information Technology at the Indian Institute of Information Technology (IIIT) Allahabad. 
      I have a keen interest in the future of autonomous driving, surveillance systems, and industrial inspection. 
      My expertise lies in advanced machine learning frameworks like TensorFlow and the art of Generative Adversarial Networks (GANs),
       where I focus on unpaired image-to-image translation.
        I also have a deep-rooted passion for cybersecurity, particularly in 
        safeguarding Bluetooth communication channels. My hands-on experience
        includes a Data Science Internship at Tech Mahindra and a fellowship at C3iHub, IIT Kanpur, 
        where I honed my skills in innovative problem-solving and cutting-edge research.
      </p>
      <div className="child">
      <Interests/>
      <Education/>
      </div>
    </div>
  );
};

