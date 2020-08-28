import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

import fourhundo from '../images/placeholder-400x400.png'

class Hero extends Component {
    render() {
        return(
            <Parallax y={[-12, 12]} tagOuter="figure">
                    <div  className="hero-div columns">
                        <div className="hero-text column is-half">
                            <div className="bio">
                                <h1 className="subtitle is-4">I am a budding full-stack developer eager to learn both back and front end technologies - experienced with front-end frameworks such as React, and building back-ends in both JavaScript and Ruby</h1>
                            </div>
                        </div>
                        <div className="hero-img column">
                            <figure className="image">
                                <img src={fourhundo} alt="headshot of me" style={{height: '400px', width: '400px'}} />
                            </figure>
                        </div>
                    </div>      
            </Parallax>
        )
    }
}

export default Hero
