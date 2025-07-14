import React from "react";
import '../css/project.css';

function Project() {
  return (
    <div>
      <header>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Project Page</h1>
      </header>

      <div className="container">
        <h2>Recent Works</h2>
        <ul>
          <li>Residential Building in Kampala</li>
          <li>Commercial Complex in Entebbe</li>
          <li>Road Expansion Project in Jinja</li>
          <li>Paver Installation at Local Park</li>
        </ul>
      </div>

      <div className="container">
        <h2>PROJECTS GALLERY</h2>

        <div className="info-box Project1-box">
          <h2 style={{ color: "blue" }}>Manufacturing cement blocks</h2>
          <img src={require('/assets/cement.jpg')} alt="Project 1" />
        </div>

        <div className="info-box Project2-box">
          <h2>Manufacturing pavers</h2>
          <img src={require('../../Images/pavers manufacturing.jpg')} alt="Project 2" />
        </div>

        <div className="info-box Project3-box">
          <h2>Manufacturing Tiles</h2>
          <img src={require('../../Images/tiles manufacturing.jpg')} alt="Project 3" />
        </div>

        <div className="info-box Project4-box">
          <h2>Delivering cement blocks</h2>
          <img src={deliveryImg} alt="Project 4" />
        </div>

        <div className="info-box Project5-box">
          <h2>Installing pavers</h2>
          <img src={paversInstallImg} alt="Project 5" />
        </div>

        <div className="info-box Project6-box">
          <h2>Assembling and installing Tiles</h2>
          <img src={assemblingTilesImg} alt="Project 6" />
        </div>
      </div>

      <h1>What Engineer says:</h1>
      <img src={require('../../Images/engineer.jpg')} alt="Engineer" />
      <h2>
        Working with Nyumbani Construction Works on your project is absolutely the best decision you can ever make towards achieving your dream.
        We put together a great team to handle our clients' needs. Our teams not only uphold great customer relationships but also invest their amazing skills to bring to life the exact projects that our clients are interested in.
        We intentionally choose a set of trained experts to handle projects to ensure client satisfaction.
        Above all, at Nyumbani we uphold our clients’ requests and expectations and strive to produce products that suit their tastes.
        Nyumbani Construction Works is "Your One Stop Shop For Construction Excellence".
        <br />
        — By Eng. Muzinga James, CEO Nyumbani Construction Works
      </h2>
    </div>
  );
}

export default Project;
