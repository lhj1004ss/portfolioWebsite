import React from "react";
import Title from "../components/Title";
import c from "../images/c.png";
import css from "../images/css.png";
import firebase from "../images/firebase.png";
import github from "../images/github.png";
import html from "../images/html.png";
import java from "../images/java.png";
import javascript from "../images/javascript.png";
import linux from "../images/linux.png";
import macos from "../images/macos.png";
import sql from "../images/sql.png";
import windows from "../images/windows.png";
import react from "../images/react.png";

function About() {
  return (
    <div className="about" id="about">
      <Title title="about me"></Title>
      <Title subtitle="skills"></Title>
      <div className="container">
        <img className="img" src={c} alt="c language"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={java} alt="java"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>

      <div className="container">
        <img className="img" src={html} alt="html"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>

      <div className="container">
        <img className="img" src={css} alt="css"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={javascript} alt="javascript"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
      <Title subtitle="framwork and database"></Title>
      <div className="container">
        <img className="img" src={react} alt="react"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={sql} alt="sql"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={firebase} alt="firebase"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={github} alt="github"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
      <Title subtitle="operating systems"></Title>
      <div className="container">
        <img className="img" src={macos} alt="macos"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={windows} alt="windows"></img>
        <div className="overlay">
          <div className="content">Proficient</div>
        </div>
      </div>
      <div className="container">
        <img className="img" src={linux} alt="linux"></img>
        <div className="overlay">
          <div className="content">Intermediate</div>
        </div>
      </div>
    </div>
  );
}

export default About;
