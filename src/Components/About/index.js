import React from "react";

const About = () => {
    const handleButtonClick = () => {
        console.log("About Button Clicked!")
    }

    return (
        <section id="About">
            <div className="section-header-div flex flex-col items-center my-5">
                <h1 className="text-center section-header">ABOUT ME</h1>
                <div className="section-header-line my-2" />
            </div>

            <div className="flex flex-col justify-evenly">
                <div className="mb-2">
                    <h2 className="about-header-2">Who am I?</h2>
                </div>

                <div>
                    <p className="my-2">I'm a <span className="bold-span">Full Stack Web Developer</span> with a passion for creating intuitive digital experiences. After getting my start in web design, I was hooked on the magic of coding and decided to make the pivot to full stack development.</p>
                </div>

                <div>
                    <p className="my-2">My journey began by enrolling in an intensive coding bootcamp at <span className="bold-span">UNC Chapel Hill</span>, where I honed my skills in <span className="bold-span">HTML, CSS, JavaScript, React</span> and other foundational web technologies. Since graduating, I've continued expanding my knowledge by building personal projects and taking online courses.</p>
                </div>

                <div>
                    <p className="my-2">As a developer, I love utilizing my <span className="bold-span">creative and analytical abilities</span> to solve problems and build things from the ground up. I thrive on taking an idea from conception to reality with clean, efficient code. Building <span className="bold-span">responsive, user-friendly</span> web apps is truly exciting for me!</p>
                </div>

                <div>
                    <p className="my-2">Currently, I'm seeking a full stack role that will allow me to contribute my skills in both <span className="bold-span">front end</span> and <span className="bold-span">back end development</span>. However, I would also be open to roles more specialized in either just frontend or backend work. My goal is to join a driven team of developers where I can <span className="bold-span">continuously grow</span> and make a <span className="bold-span">positive impact</span> through innovation.</p>
                </div>

                <div>
                    <p className="my-2">If you have a good <span className="bold-span">job opportunity</span> that matches my skills and experience and/or want to <span className="bold-span">collaborate</span> on a project then please reach out and <span className="bold-span">contact</span> me.</p>
                </div>

                <div className="about-button-div flex justify-start my-10">
                    <button className="about-button text-center" onClick={handleButtonClick}>Contact</button>
                </div>

            </div>

            <div>
                <div className="mb-6">
                    <h2 className="about-header-2">My Skills</h2>
                </div>

                <div className="skills flex flex-wrap">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React</div>
                    <div className="skill">Tailwind</div>
                    <div className="skill">Node</div>
                    <div className="skill">Express</div>
                    <div className="skill">REST</div>
                    <div className="skill">MongoDB</div>
                    <div className="skill">MySQL</div>
                    <div className="skill">SEO</div>
                    <div className="skill">Git</div>
                    <div className="skill">GitHub</div>
                    <div className="skill">Responsive Design</div>
                    <div className="skill">Python</div>
                </div>

            </div>

        </section>
    )
}

export default About;