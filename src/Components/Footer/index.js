import React from "react";
import Github from "../../assets/other/github-icon.png";
import LinkedIn from "../../assets/other/linkedin-icon.png";
import X from "../../assets/other/x-icon.png";

const Footer = () => {
    return (
        <footer id="Footer">
            <div className="footer-upper flex flex-col justify-between">
                <div className="social-container py-5">
                    <h1 className="footer-header mb-2 py-2">SOCIAL</h1>
                    <div className="flex">
                        <img src={Github} alt="github.com/ScarElite" className="social-icon mr-2" />
                        <img src={LinkedIn} alt="linkedin.com/in/mitchell-armstrong99/" className="social-icon mx-2" />
                        <img src={X} alt="twitter.com/M__Armstrong" className="social-icon mx-2" />
                    </div>
                </div>

                <div className="footer-bio-container py-5 mb-10">
                    <h1 className="footer-header mb-2 py-2">Mitchell Armstrong</h1>
                    <h2 className="footer-subheader">Resourceful full stack developer specializing in creating dynamic, responsive web applications from ideation to deployment</h2>
                    </div>
            </div>

            <div className="footer-lower mt-8">
                © Copyright 2023. Made by Mitchell Armstrong
            </div>
            
        </footer>
    )
}

export default Footer;