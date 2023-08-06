import React from "react";
import DeepThoughts from "../../assets/images/deepthoughts-preview-desktop.png"
import Github from "../../assets/other/github-project-link.png";
import External from "../../assets/other/external-link.png";
import { Link } from "react-router-dom";

const DeepThoughtsDetails = () => {
    return (
        <section id="DeepThoughtsDetails">
            <div className="project-upper flex flex-col justify-center text-center items-center py-10">
                <h1 className="project-title my-6">Deep Thoughts</h1>
                <h2 className="project-subheader my-6">Down below are more details about this project such as the Project Overview, Technology Used, and links to the website and repo if it's public.</h2>
                <a href="#technology" className="project-details-button mt-10 mb-6">PROJECT LINKS</a>
            </div>

            <div className="project-details">
                <img src={DeepThoughts} alt="Alternative Endings Desktop Preview" className="project-img mt-4 mb-8" />
                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Overview</h1>
                    
                    <p className="project-details-overview py-3">Deep Thoughts is a social media web application I built to allow users to create accounts, make posts, like and comment on other's posts, and like comments. It provides core social media functionality enabling content sharing and engagement.</p>

                    <p className="project-details-overview py-3">I built Deep Thoughts using JavaScript for the core logic and MongoDB for the database. After completing development, I hosted the application on Heroku to make it publicly accessible. Gaining exposure to new languages like JavaScript and platforms like Heroku was valuable experience for my growth as a developer.</p>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Challenge</h1>
                    
                    <p className="project-details-overview py-3">The project's main technology challenge was using MongoDB for the first time as the database, when I had only used MySQL previously. Learning and integrating a new database technology was initially difficult. However, I overcame the hurdle through perseverance and studying MongoDB's approach.</p>

                    <p className="project-details-overview py-3">Though challenging at first, I gained valuable experience expanding my skills into MongoDB. Now it has become one of my favorite technologies to work with. Building Deep Thoughts exemplified my ability to adapt and add new technologies to my developer toolbox.</p>
                </div>

                <div id="technology" className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Technology Used</h1>
                    <div className="skills flex flex-wrap">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">Heroku</div>
                        <div className="skill">Git</div>
                        <div className="skill">GitHub</div>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Links</h1>
                    <div className="flex justify-start">
                        <a href="https://github.com/ScarElite/deep-thoughts" target="blank">
                            <img src={Github} alt="" className="project-details-link mr-4" />
                        </a>
                        <a href="https://warm-atoll-72156.herokuapp.com/" target="blank">
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

export default DeepThoughtsDetails;