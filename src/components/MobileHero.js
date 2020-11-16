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
                                <h1 className="subtitle is-4">I am a budding full-stack developer eager to learn both back and front end technologies - experienced with front-end frameworks such as React, and building back-ends in both JavaScript and Ruby</h1>
                            </div>
                        </div>

                    </div>      
            </Parallax>
        )
    }
}

export default MobileHero
