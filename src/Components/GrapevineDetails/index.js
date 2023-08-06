import React from "react";
import Grapevine from "../../assets/images/grapevine-preview-desktop.png"
import Github from "../../assets/other/github-project-link.png";
import External from "../../assets/other/external-link.png";
import { Link } from "react-router-dom";

const GrapevineDetails = () => {
    return (
        <section id="GrapevineDetails">
            <div className="project-upper flex flex-col justify-center text-center items-center py-10">
                <h1 className="project-title-grapevine my-6">The Grapevine Senior Placement Services</h1>
                <h2 className="project-subheader my-6">Down below are more details about this project such as the Project Overview, Technology Used, and links to the website and repo if it's public.</h2>
                <a href="#technology" className="project-details-button mt-10 mb-6">PROJECT LINKS</a>
            </div>

            <div className="project-details">
                <img src={Grapevine} alt="The Grapevine Senior Placement Services Desktop Preview" className="project-img mt-4 mb-8" />
                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Overview</h1>
                    
                    <p className="project-details-overview py-3">The Grapevine Senior Placement Services is a web application I collaborated on with fellow developer <a href="https://github.com/DavidDowell" target="blank" className="project-collab">David Dowell</a>, using React, JavaScript, Tailwind CSS, and EmailJS. David was excellent to work with - we shared a lot of similar ideas and approaches in designing the site. This website aims to connect families in Southeast Michigan with senior care communities suited to their loved ones' needs.</p>

                    <p className="project-details-overview py-3">The home page immediately engages visitors by highlighting The Grapevine's commitment to compassionate, personalized placement services for families in Southeast Michigan. I implemented a streamlined UI design using Tailwind CSS that balances aesthetics with easy navigation and scanning.</p>

                    <p className="project-details-overview py-3">Key sections of the site provide families with helpful resources and details needed to make informed decisions about senior care options. Integrated contact forms allow site visitors to conveniently reach out to The Grapevine's experts to request services or information.</p>

                    <p className="project-details-overview py-3">The finished product is a robust website that reflects The Grapevine's quality of service and genuinely helps connect families to ideal environments for their aging loved ones.</p>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Challenge</h1>
                    
                    <p className="project-details-overview py-3">The main challenge with this project was that the client did not initially have a clear vision for what she wanted in the website design and content. She provided only minimal information about the business upfront.</p>

                    <p className="project-details-overview py-3">To overcome this hurdle, I took the lead in proposing options for site structure, layouts, and detailed wording in each section. David and I maintained close communication at each step to gather feedback and ensure alignment with their vision. Frequent communication and iteration were key throughout the process. As I supplied examples of what the site could look like and the specifics that could be covered, the client was able to provide guidance to evolve the direction.</p>

                    <p className="project-details-overview py-3">By maintaining an open dialogue, we were able to take the client's broad needs and transform them into a polished, functional website that met her goals. The final product exceeded expectations thanks to our persistence in guiding the process from concept to completion, despite starting with minimal direction.</p>
                </div>

                <div id="technology" className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Technology Used</h1>
                    <div className="skills flex flex-wrap">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Tailwind CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                        <div className="skill">EmailJS</div>
                        <div className="skill">Git</div>
                        <div className="skill">GitHub</div>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Links</h1>
                    <div className="flex justify-start">
                        <img src={Github} alt="" className="project-details-link github-icon mr-4" />
                        <a href="https://www.thegrapevineseniorplacement.com/" target="blank">
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

export default GrapevineDetails;