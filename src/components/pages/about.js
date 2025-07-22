import React from "react";
import '../css/about.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function About() {
    return (
        <>
            <div 
                className="header-background"
               style={{
            backgroundImage: "url('/assets/footer image.jpg')"
          }}
            >
                <h1>ABOUT US</h1>
                <p>Building Trust, Relationships & A Sustainable Future</p>
            </div>

            <section className="history-section">
                <div className="history-text">
                    <h1>OUR HISTORY</h1>
                    <p>
                        Operating from Najjera Town in Wakiso District, Nyumbani Construction Works was registered and licensed on 12th June 2018. 
                        We have built a strong reputation for delivering high-quality construction services across Uganda. 
                        We specialize in innovative materials for residential, commercial, and industrial projects.
                        More than just structures, we are committed to building trust, strong relationships, and a sustainable future.
                    </p>
                </div>

                <div className="history-image">
                    <img src="/assets/pic2.jpg" alt="Our History" />
                </div>
            </section>

            <section className="info-container">
                <div className="info-box">
                    <h2><i className="bi bi-bullseye"></i> Mission</h2>
                    <p>To deliver sustainable construction solutions that improve lives.</p>
                </div>

                <div className="info-box">
                    <h2><i className="bi bi-eye-fill"></i> Vision</h2>
                    <p>To become the region’s most trusted name in construction and paving solutions.</p>
                </div>
            </section>

            <section className="corevalues">
                <h2>CORE VALUES</h2>
                <div className="corevalues-row">
                    <div className="corevalue-box">
                        <h3><img src="/assets/professionalism.png" alt="" /> Professionalism</h3>
                        <p>We conduct our business professionally, fostering an organized, efficient, and positive work environment.</p>
                    </div>

                    <div className="corevalue-box">
                        <h3><img src="/assets/integrity.png" alt="" /> Integrity</h3>
                        <p>Honesty and trust define every interaction with our clients and stakeholders.</p>
                    </div>

                    <div className="corevalue-box">
                        <h3><img src="/assets/exceptional service logo.png" alt="" /> Exceptional Service</h3>
                        <p>We offer exceptional service with products tailored to the unique tastes and needs of each client.</p>
                    </div>
                </div>
            </section>

            <h1 className="center-text">Our Team</h1>
            <div className="team-container">
                <div className="team-image">
                    <img src="/assets/pic2.jpg" alt="Muzinga James" />
                    <h3>Muzinga James</h3>
                    <h4>CEO & Founder</h4>
                </div>

                <div className="team-image">
                    <img src="/assets/pic2.jpg" alt="Mr. Mutyaba Shafik" />
                    <h3>Mr. Mutyaba Shafik</h3>
                    <h4>Operations Manager</h4>
                </div>

                <div className="team-image">
                   <img src="/assets/pic2.jpg" alt="Kiyimba Moses" />
                    <h3>Kiyimba Moses</h3>
                    <h4>Head of Production</h4>
                </div>

                <div className="team-image">
                   <img src="/assets/pic2.jpg" alt="Kiyimba Moses" />
                    <h3>Kiyimba Moses</h3>
                    <h4>Head of Production</h4>
                </div>
                                
            </div>
        </>
    );
}

export default About;
