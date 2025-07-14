import React from "react";
import '../css/about.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
    return (
        <>
            <header>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>ABOUT US</h1>
            </header>

            <h2>
                We as Nyumbani Construction Works have been operating as a registered business in Uganda since 12th June 2018.
                Based in Najjera Town, Wakiso District, we have strived to establish ourselves as a forward-thinking construction company,
                having been licensed to operate by Kampala City Council Authority in 2018. This is evident by the reputation we have earned 
                from both clients and competitors in terms of quality, durability, and reliability of our end products, as well as our drive 
                to satisfy customers. We provide innovative construction material solutions tailored to both residential and commercial needs.
            </h2>

<div className="info-container">
    <div className="info-box">
        <h2>
            <i className="bi bi-bullseye" style={{ color: '#FF4500', marginRight: '10px' }}></i>
            Mission
        </h2>
        <p>To deliver sustainable construction solutions that improve lives.</p>
    </div>

    <div className="info-box">
        <h2>
            <i className="bi bi-eye-fill" style={{ color: '#FF4500', marginRight: '10px' }}></i>
            Vision
        </h2>
        <p>To become the region’s most trusted name in construction and paving solutions.</p>
    </div>
</div>


            <div className="corevalues">
                <h1>
                    <img src="/assets/core values logo.png" alt="Core Values Icon"
                        style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                    CORE VALUES
                </h1>

                <div className="corevalue-box">
                    <h2>
                        <img src="/assets/professionalism.png" alt="Professionalism Icon"
                            style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                        Professionalism
                    </h2>
                    <p>
                        We believe in doing business in a professional and orderly manner.
                        We strive to maintain an organized and efficient work environment, while encouraging a positive and supportive atmosphere.
                    </p>
                </div>

                <div className="corevalue-box">
                    <h2>
                        <img src="/assets/integrity.png" alt="Integrity Icon"
                            style={{ width: '80px', height: '80px', marginRight: '10px', verticalAlign: 'middle' }} />
                        Integrity
                    </h2>
                    <p>
                        We believe in honesty and trust, working to build trust with our clients in each and every interaction.
                    </p>
                </div>

                <div className="corevalue-box">
                    <h2>
                        <img src="/assets/exceptional service logo.png" alt="Exceptional Service Icon"
                            style={{ width: '50px', height: '50px', marginRight: '10px', verticalAlign: 'middle' }} />
                        Exceptional Service
                    </h2>
                    <p>
                        We believe in providing exceptional service to our clients, delivering the best quality of products tailored to their tastes.
                    </p>
                </div>
            </div>

            <div className="whychooseus">
                <h2>Why Choose Us:</h2>
                <p>
                    Exceptional service to our clients, delivering the best quality of products tailored to their tastes.
                    Transparent communication with our clients, integrity in every transaction, long-term relationships, and consistent, reliable service.
                </p>
            </div>

            <div className="corevalues">
                <h2>Core Values:</h2>
                <ul>
                    <li>Integrity</li>
                    <li>Quality</li>
                    <li>Customer Satisfaction</li>
                </ul>
            </div>

            <div className="box">
                <h2>Our Story</h2>
                <p>
                    Founded by passionate builders, we started with a goal to offer affordable, durable products to the local market.
                </p>

            <h2>Meet Our Team</h2>
            <ul>
                <li>James Muzinga – Founder & CEO</li>
                <li>Operations Manager</li>
            </ul>

            <h2>What Makes Us Unique</h2>
            <p>We use eco-friendly techniques and local resources to deliver top-notch services.</p>
            </div>
        </>
    );
}

export default About;
