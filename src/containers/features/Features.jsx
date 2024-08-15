import React from "react";
import './features.css'
import { Feature } from "../../components";

const Features = () => {
    return(
        <div className="gpt3__features section__margin">
            <div className="gpt3__features-head">
                <h1 className="gradient_text">The Future is Now and You Just Need To Realize It. Stop into Future Today & Make it Happen</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-content">
               <Feature title={"Improving and distrusts intantly"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem"}/>
               <Feature title={"Become the tended action"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem"}/>
               <Feature title={"Message or and nothing"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem"}/>
               <Feature title={"Really boy law county"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem"}/>
            </div>

        </div>
    )
}

export default Features