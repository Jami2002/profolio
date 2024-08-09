import React from "react";
import './whatGPT3.css'
import { Feature } from "../../components";

const WhatGPT3 = () => {
    return(
        <div className="gpt3__whatgpt3 section__margin" id='whgpt3'>
          <div className="gpt3__whatgpt3-feature">
             <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem' />
          </div>
          <div className="gpt3__whatgpt3_heading">
            <h1 className="gradient_text"> The possibilities are beyond your imagination </h1>
            <p>Explore The Librairy</p>
          </div>
          <div className="gpt3__whatgpt3-container">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
    )
}

export default WhatGPT3