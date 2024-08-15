import React from "react";
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'

const Possibilty = () => {
    return(
        <div className="gpt3__possibility section__margin">
            <div className="gpt3__possibility-image">
                <img src={PossibilityImage} alt="possibilty image" />
            </div>
            <div className="gpt3__possibility-container">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat ipsam ratione? Ad officia iste recusandae, tempora debitis laudantium ipsum delectus impedit in provident exercitationem porro nulla. Odio, aut possimus.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibilty