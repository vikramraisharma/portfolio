import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

import portrait from '../images/cropped.jpg'

class MobileHero extends Component {
    render() {
        return(
            <Parallax y={[-12, 12]} tagOuter="figure" disabled={true}>
                    <div  className="hero-div-mobile is-vertical is-12">
                        <div className="hero-img-mobile">
                            <figure className="image">
                                <img src={portrait} alt="headshot of me" style={{height: '400px', width: '400px'}} />
                            </figure>
                        </div>
                        <div className="hero-text-mobile">
                            <div className="bio">
                                <h1 className="subtitle is-4">Hi! I'm a junior full-stack developer eager skilled in JavaScript (React/Node/jQuery), Python (Django/scripting), Ruby(Rails/Sinatra), and HTML/CSS.</h1>
                            </div>
                        </div>

                    </div>      
            </Parallax>
        )
    }
}

export default MobileHero
