
import React from "react";
import '../css/gallery.css';
import { Link } from "react-router-dom";

function Gallery() {
    return (
  
         <div className="container">
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
              <h2 className="h4 text-white" style={{ fontStyle: 'italic' }}>Ready to build your dream structure?
                Explore our services to see how we can bring it to life.
              </h2>
              <Link to='/about' className="btn btn-warning mt-4">OUR STORY</Link><br/><br/><br/><br/>

        <div className="gallery">
            <h1>OUR GALLERY</h1>
                      <div className="info-boxes">
                <div className="info-box">
                    <img src="/assets/cement.jpg" alt="Manufacturing cement blocks" />
                    <h2>Manufacturing cement blocks</h2>
                </div>

                <div className="info-box">
                    <img src="/assets/pavers manufacturing.jpg" alt="Manufacturing pavers" />
                    <h2>Manufacturing pavers</h2>
                </div>

                <div className="info-box">
                    <img src="/assets/tiles.jpg" alt="Manufacturing Tiles" />
                    <h2>Manufacturing Tiles</h2>
                </div>

                <div className="info-box">
                    <img src="/assets/delivery.jpg" alt="Delivering cement blocks" />
                    <h2>Delivering cement blocks</h2>
                </div>

                <div className="info-box">
                    <img src="/assets/pavers installations.jpg" alt="Installing pavers" />
                    <h2>Installing pavers</h2>
                </div>

                <div className="info-box">
                    <img src="/assets/assembling tiles.jpg" alt="Assembling and installing Tiles" />
                    <h2>Assembling and installing Tiles</h2>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Gallery;
