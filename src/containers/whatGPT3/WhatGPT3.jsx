import React from "react";
import './whatGPT3.css'
import { Feature } from "../../components";

const WhatGPT3 = () => {
    return(
        <div className="gpt3__whatgpt3 section__margin" id='whgpt3'>
          <div className="gpt3__whatgpt3-feature">
             <Feature />
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