import React from "react";
import AlternativeEndings from "../../assets/images/ae-preview-desktop.png"
import Github from "../../assets/other/github-project-link.png";
import External from "../../assets/other/external-link.png";
import { Link } from "react-router-dom";

const AlternativeEndingsDetails = () => {
    return (
        <section id="AlternativeEndingsDetails">
            <div className="project-upper flex flex-col justify-center text-center items-center py-10">
                <h1 className="project-title my-6">Alternative Endings</h1>
                <h2 className="project-subheader my-6">Down below are more details about this project such as the Project Overview, Technology Used, and links to the website and repo if it's public.</h2>
                <a href="#technology" className="project-details-button mt-10 mb-6">PROJECT LINKS</a>
            </div>

            <div className="project-details">
                <img src={AlternativeEndings} alt="Alternative Endings Desktop Preview" className="project-img mt-4 mb-8" />
                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Overview</h1>
                    
                    <p className="project-details-overview py-3">Alternative Endings is a web application built in two weeks as a group project during my coding bootcamp. I primarily collaborated with <a href="https://github.com/hartsfieldt" target="blank" className="project-collab">Teresa Hartsfield</a> to create the site using JavaScript, Bootstrap, MySQL, ExpressJS, HandlebarsJS, and nodemailer.</p>

                    <p className="project-details-overview py-3">The goal was to enable movie buffs to look up current films, write reviews, and most importantly - share alternative endings. Users can read and comment on proposed alternate endings, fostering engaging storytelling and creativity.</p>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Challenge</h1>
                    
                    <p className="project-details-overview py-3">Teresa and I faced the major challenge of minimal participation from most teammates. Out of a group of 5, we received little to no support from 3 members. However, through perseverance and long hours, Teresa and I successfully built all core features - movie lookups, reviews, alternate endings, comments, and email notifications.</p>

                    <p className="project-details-overview py-3">Despite time constraints and limited support, Teresa and I created a functional platform for crowdsourcing creative movie endings. The project exemplified our ability to collaborate effectively and overcome adverse circumstances to deliver a quality application on time.</p>
                </div>

                <div id="technology" className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Technology Used</h1>
                    <div className="skills flex flex-wrap">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Bootstrap</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">HandlebarsJS</div>
                        <div className="skill">MySQL</div>
                        <div className="skill">ExpressJS</div>
                        <div className="skill">nodemailer</div>
                        <div className="skill">Git</div>
                        <div className="skill">GitHub</div>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Links</h1>
                    <div className="flex justify-start">
                        <a href="https://github.com/ScarElite/Alternative-Endings" target="blank">
                            <img src={Github} alt="" className="project-details-link mr-4" />
                        </a>
                        <a href="https://alternative-endings.herokuapp.com/" target="blank">
                            <img src={External} alt="" className="project-details-link ml-4" />
                        </a>
                    </div>
                    <Link to="/">
                        <button className="project-details-link-button mt-12">GO BACK</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AlternativeEndingsDetails;