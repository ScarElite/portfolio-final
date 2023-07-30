import React from "react";

const Main = () => {
    const handleButtonClick = () => {
        console.log("Projects Button Clicked!")
    }

    return (
        <section id="Main" className="flex flex-col justify-around">

            <div className="main-name-div">
                <h1 className="main-name text-center">HELLO,</h1>
                <h1 className="main-name text-center">I'M MITCHELL ARMSTRONG</h1>
            </div>
            
            <div className="main-statement-div">
                <h2 className="main-statement text-center">Resourceful full stack developer specializing in creating dynamic, responsive web applications from ideation to deployment</h2>
            </div>

            <div className="main-button-div flex justify-center">
                <button className="main-button text-center" onClick={handleButtonClick}>PROJECTS</button>
            </div>

        </section>
    )
}

export default Main;