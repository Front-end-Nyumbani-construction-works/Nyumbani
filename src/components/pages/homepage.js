
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/homepage.css';

function Homepage() {
  return (
    <>
    <div className="home-page">
      <div
        className="header-background d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: "url('/assets/background image.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <h1 className="display-4 text-white" style={{ fontWeight: 'bold' }}>NYUMBANI CONSTRUCTION WORKS</h1>
        <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>Your One Stop Shop For Construction Excellence</h2>
        <Link to='/about' className="btn btn-warning mt-4">OUR STORY</Link>
        <br /><br /><br /><br />
      </div>

      <div className="container">
        <div className='future'>
          <h1>Building Uganda's Future</h1>
          <p>
            At Nyumbani Construction Works, we specialize in delivering innovative and reliable construction solutions for both
            residential and commercial projects. Since our establishment in 2018, we've grown into a trusted name in Uganda's
            construction industry known for our commitment to quality, customer satisfaction, and sustainable practices. Based in
            Najjera_Kungu, Wakiso District, we continue to shape the future by building with integrity and purpose.
          </p>
        </div>
 
        <div className="drive-content">
          <div className="left-side">
            <div className="drive-image">
              <img src="/assets/free.png" alt="Contact" className="drive-image" />
            </div>
          </div>
          
          <div className="right-side">
            <div className="drive-text">
              <h1>What Drives Us:</h1>
              <p>
                Every project we undertake is a reflection of the values that define who we are. We are driven by
                professionalism in all dealings, unwavering integrity in how we operate, and a relentless pursuit
                of exceptional service that puts our clients first. These values guide our work, shape our relationships,
                and inspire us to build with purpose and pride.
              </p>
            </div>
          </div>
        </div>

        <div className='services'>
          <h1>Our Services</h1>
          <ul>
            <li>Manufacturing of concrete blocks and building structures</li>
            <li>Manufacturing and installation of pavers</li>
            <li>Manufacture and installation of tiles</li>
            <li>Sales of cement</li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}

export default Homepage;
