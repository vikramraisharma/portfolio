import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

import portrait from '../images/cropped.jpg'

class MobileHero extends Component {
    render() {
        return(
            <Parallax y={[-12, 12]} tagOuter="figure" disabled={true}>
                    <div  className="hero-div tile is-parent is-vertical is-12">
                        <div className="hero-img tile is-child notification">
                            <figure className="image">
                                <img src={portrait} alt="headshot of me" style={{height: '400px', width: '400px'}} />
                            </figure>
                        </div>
                        <div className="hero-text tile is-child notification">
                            <div className="bio">
                                <h1 className="subtitle is-4">I am a budding full-stack developer eager to learn both back and front end technologies - experienced with front-end frameworks such as React, and building back-ends in both JavaScript and Ruby <br/><br/>Active TS/SCI Poly Clearance</h1>
                            </div>
                        </div>

                    </div>      
            </Parallax>
        )
    }
}

export default MobileHero
