import "./about.css";
import Me from "../../img/vero.png";
import Jump from "../../img/jump.jpeg";
import FemHack from "../../img/Femhack.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Me} alt=" me" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I have a passion for technology, I did the FullStack Bootcamp at
          Nuclio Digital School in Barcelona, ​​where I learned Javascript ES6,
          HTML5, CSS3 and ReactJs,also I'm knowledgeable in
          NodeJs,Express,MongoDB and the creation of Rest Api,right now I'm
          looking for my first opportunity in the technology industry and
          continuing to study and doing my own projects. In my personal life,I
          like sports,work on my projects,study,spend time with family and
          friends,movies and nature.
        </p>
        <div className="about-hack">
          <img src={Jump} alt="" className="about-hack-img" />
          <img src={FemHack} alt="" className="about-hack-img" />
          <div className="about-hack-texts">
            <h4 className="about-hack-title">JUMP2DIGITAL HACKATON 2021</h4>
            <p className="about-hack-desc">
              This was my first Hackaton,it was a great experience,where I meet
              and work with amazing people.
            </p>
            <br />

            <h4 className="about-hack-title">International FEMHACK 2022</h4>
            <p className="about-hack-desc">
              This was amazing! where woman around the world join this amazing
              event in a metaverse scenario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
