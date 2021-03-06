import React, { Component } from 'react';
import SocialMediaIcon from '../about/SocialMediaIcon'

class AboutSection extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <div >
                        <h2 className="mb-0">Gihan &nbsp;
                        <span className="text-primary">Siriwardhana</span>
                        </h2>
                        <div className="">
                            <i className="fas fa-map-marker-alt" />&nbsp;&nbsp; Malabe · Sri Lanka  <br />
                            <i className="fas fa-mobile-alt" />&nbsp;&nbsp; +94 (0) 714914133 | +94 (0) 769338710 <br />
                            <i className="fas fa-envelope" /> &nbsp;<a href="mailto:gihan.siriwardhana@studentpartner.com">gihan.siriwardhana@studentpartner.com</a>
                            <br />
                            <i className="fas fa-envelope" /> &nbsp;<a href="mailto:it17016230@my.sliit.lk">it17016230@my.sliit.lk</a>
                        </div>
                    </div>
                    <br /><br /><br />
                    <p className="lead mb-5">Problem solver, Leader, Tech Enthusiast, Public Speaker and a student who seeks
          opportunities to enhance and share knowledge in any possible.</p>
                    <div className="social-icons" data-aos="flip-left" data-aos-duration="500" >

                        <SocialMediaIcon url="https://www.linkedin.com/in/gihan-saranga-siriwardhana/" icon="fab fa-linkedin-in" />
                        <SocialMediaIcon url="https://github.com/gihanrcg" icon="fab fa-github" />
                        <SocialMediaIcon url="https://stackoverflow.com/users/10086033/gihan-saranga-siriwardhana" icon="fab  fa-stack-overflow" />
                        <SocialMediaIcon url="https://www.facebook.com/gihan.s.siriwardhana" icon="fab  fa-facebook" />
                        <SocialMediaIcon url="https://www.instagram.com/gihan_saranga_siriwardhana/" icon="fab fa-instagram" />

                    </div>
                </div>
            </section>
        );
    }
}

export default AboutSection;