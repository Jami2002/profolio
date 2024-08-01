import React from "react";
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/Ai.png'

const Header = () => {
    return(
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient_text"> Let's Build Something amzing with GPT-3 OpenAI </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur qui, quae ut dignissimos nulla eum ex cumque, exercitationem corrupti, commodi libero expedita optio tempore consequuntur labore? A distinctio natus neque.</p>

          <div className="gpt3__header-content__input" >
            <input type="email" placeholder="your email address" />
            <button type="butt">Get started</button>
          </div> 

          <div className="gpt3__header-content_people">
            <img src={people} alt="people"/>
            <p>1,600 people requested access a visit in last 24 hours  </p>
          </div> 

        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai"/>
        </div>
      </div>
    )
}

export default Header