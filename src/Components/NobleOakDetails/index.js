import React from "react";
import NobleOak from "../../assets/images/nobleoak-preview-desktop.png"
import Github from "../../assets/other/github-project-link.png";
import External from "../../assets/other/external-link.png";
import { Link } from "react-router-dom";

const NobleOakDetails = () => {
    return (
        <section id="NobleOakDetails">
            <div className="project-upper flex flex-col justify-center text-center items-center py-10">
                <h1 className="project-title my-6">Noble Oak Solutions</h1>
                <h2 className="project-subheader my-6">Down below are more details about this project such as the Project Overview, Technology Used, and links to the website and repo if it's public.</h2>
                <a href="#technology" className="project-details-button mt-10 mb-6">PROJECT LINKS</a>
            </div>

            <div className="project-details">
                <img src={NobleOak} alt="Noble Oak Solutions Desktop Preview" className="project-img mt-4 mb-8" />
                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Project Overview</h1>
                    
                    <p className="project-details-overview py-3">Noble Oak Solutions is a website I collaborated on with fellow web developer <a href="https://github.com/DavidDowell" target="blank" className="project-collab">David Dowell</a> using React, JavaScript, Tailwind CSS, and EmailJS. We worked together to create an effective online presence for a company providing residential property buying, selling, and mortgage relief services.</p>

                    <p className="project-details-overview py-3">David was great to work with - we shared a lot of synergy in our design ideas and approaches. A key feature we implemented is the contact form that utilizes EmailJS to allow easy user inquiries. Form submissions go straight to Noble Oak's team for prompt response.</p>
                </div>

                <div className="flex flex-col justify-evenly my-4">
                    <h1 className="project-details-header py-6">Challenges</h1>
                    
                    <p className="project-details-overview py-3">I faced two major challenges during development. First, the client provided minimal direction initially on how they wanted the site laid out and designed. To address this, David and I maintained close communication at every stage to get feedback and align the site with their vision.</p>

                    <p className="project-details-overview py-3">Second, while the client took some of our creative suggestions, they largely remained set against incorporating our design ideas. Despite iterating on mockups and proposals, we struggled to gain creative liberties in shaping the site's aesthetic. Still, we worked within their required style to deliver a responsive site showcasing their services and enabling contact.</p>

                    <p className="project-details-overview py-3">Overall, through collaborating with David and overcoming restrictive client requests, I helped create an effective online presence for Noble Oak Solutions to highlight their residential property offerings.</p>
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
                        <a href="https://noble-oak.com/" target="blank">
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

export default NobleOakDetails;