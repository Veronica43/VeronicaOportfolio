import "./intro.css";

import Earth from "../../img/earth.mp4";

const Intro = () => {
  return (
    <div className="intro-main">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello My name is</h2>
          <h1 className="intro-name">Veronica Ortega</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">FrontEnd Developer</div>
              <div className="intro-title-item">Javascript</div>
              <div className="intro-title-item">React js</div>
              <div className="intro-title-item">Html5,Css3</div>
              <div className="intro-title-item">Node js</div>
            </div>
          </div>
          <p className="intro-desc">
            Hi! I'm a Junior Frontend Developer looking for a development
            position. Supportive and enthusiastic team player, dedicated to
            efficiently resolving project issues.
          </p>
          <a
            href="https://veronica-ortega-cv.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            My CV
          </a>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg">
          <video
            className="intro-video"
            src={Earth}
            muted
            playsInline
            autoPlay
            loop
            width="100%"
            height="100%"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
