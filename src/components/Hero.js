import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

import portrait from '../images/cropped.jpg'

class Hero extends Component {
    render() {
        return(
            <Parallax y={[-12, 12]} tagOuter="figure">
                    <div  className="hero-div columns">
                        <div className="hero-text column is-half">
                            <div className="bio">
                                <h1 className="subtitle is-4">Hi! I'm a junior full-stack developer skilled with JavaScript (React/Node/jQuery), Python (Django/scripting), Ruby(Rails/Sinatra), and HTML/CSS. Check out my projects and blog for more of my work!</h1>
                            </div>
                        </div>
                        <div className="hero-img column">
                            <figure className="image">
                                <img src={portrait} alt="headshot of me" style={{height: '400px', width: '400px'}} />
                            </figure>
                        </div>
                    </div>      
            </Parallax>
        )
    }
}

export default Hero
