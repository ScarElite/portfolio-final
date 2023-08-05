import React from "react";
import { Link } from "react-router-dom";
import Grapevine from "../../assets/images/grapevine-preview-desktop.png"
import Nobleoak from "../../assets/images/nobleoak-preview-desktop.png"
import AlternativeEndings from "../../assets/images/ae-preview-desktop.png"
import DeepThoughts from "../../assets/images/deepthoughts-preview-desktop.png"

const Projects = () => {
    return (
        <section id="Projects">
            <div className="section-header-div flex flex-col items-center my-5">
                <h1 className="text-center section-header">PROJECTS</h1>
                <div className="section-header-line my-2" />

                <div className="my-4 text-center">
                    <h1 className="projects-intro">As I've grown as a developer, I've challenged myself to create a diverse portfolio of projects using a variety of front end and back end technologies.</h1>
                </div>
            </div>
            
            <div className="projects">
                
                <div className="project flex flex-col items-center my-20">
                    <a href="https://www.thegrapevineseniorplacement.com/" target="blank" rel="noreferrer">
                        <img className="project-img" src={Grapevine} alt="The GRapevine Senior Placement Services Desktop Preview" />
                    </a>
                    <h1 className="project-name text-center mt-8 mb-4">The Grapevine Senior Placement Services</h1>
                    <p className="project-description text-center">Built an intuitive, responsive website for The Grapevine Senior Placement Services using <span className="bold-span">React, Tailwind CSS, and JavaScript.</span> The site provides an easy way for families to access resources and find ideal senior care communities in Southeast Michigan based on individualized needs and preferences.</p>
                    <Link to="/Grapevine">
                        <button className="project-button my-6">More Details</button>
                    </Link>
                </div>

                <div className="project flex flex-col items-center my-20">
                    <a href="https://noble-oak.com/" target="blank" rel="noreferrer">
                        <img className="project-img" src={Nobleoak} alt="Noble Oak Solutions Desktop Preview" />
                    </a>
                    <h1 className="project-name text-center mt-8 mb-4">Noble Oak Solutions</h1>
                    <p className="project-description text-center">Created a responsive real estate website for Noble Oak Solutions using <span className="bold-span">React, Tailwind CSS, and JavaScript.</span> The site enables clients in NC to easily access services for buying, selling, financing, and inheriting property, with a focus on mortgage relief options and avoiding foreclosure.</p>
                    <Link to="/NobleOak">
                        <button className="project-button my-6">More Details</button>
                    </Link>
                </div>

                <div className="project flex flex-col items-center my-20">
                    <a href="https://alternative-endings.herokuapp.com/" target="blank" rel="noreferrer">
                        <img className="project-img" src={AlternativeEndings} alt="Alternative Endings Desktop Preview" />
                    </a>
                    <h1 className="project-name text-center mt-8 mb-4">Alternative Endings</h1>
                    <p className="project-description text-center">Built an interactive movie website using <span className="bold-span">JavaScript, jQuery, Handlebars.js, Bootstrap, MySQL, and Express.js.</span> The platform enables film buffs to share and discuss alternative endings for movies through blog posts and comments. It also provides movie info, theaters, and search capabilities.</p>
                    <Link to="/AlternativeEndings">
                        <button className="project-button my-6">More Details</button>
                    </Link>
                </div>

                <div className="project flex flex-col items-center my-20">
                    <a href="https://warm-atoll-72156.herokuapp.com/" target="blank" rel="noreferrer">
                        <img className="project-img" src={DeepThoughts} alt="Deep Thoughts Desktop Preview" />
                    </a>
                    <h1 className="project-name text-center mt-8 mb-4">Deep Thoughts</h1>
                    <p className="project-description text-center">Created a social media web application using <span className="bold-span">JavaScript and MongoDB.</span> Users can sign up, create posts, add friends, and interact through likes and comments. The site provides a basic yet engaging platform for sharing thoughts and connecting.</p>
                    <Link to="/DeepThoughts">
                        <button className="project-button my-6">More Details</button>
                    </Link>
                </div>

            </div>

        </section>
    )
}

export default Projects;