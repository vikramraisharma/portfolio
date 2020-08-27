import React, { Component } from 'react';
import {Parallax, ParallaxBanner} from 'react-scroll-parallax';

import fourhundo from '../images/placeholder-400x400.png'

class Hero extends Component {
    render() {
        return(
            <Parallax y={[-10, 10]} tagOuter="figure" className="hero-div columns">

                        <div className="hero-text column is-half">
                            <div className="bio">
                                <h1 className="subtitle is-4">I am a budding full-stack developer eager to learn both back and front end technologies - experienced with front-end frameworks such as React, and building back-ends in both JavaScript and Ruby</h1>
                            </div>
                        </div>
                        <ParallaxBanner
                            className="banner-class"
                            layers={[
                                { image: `${fourhundo}`, amount: 0.2}
                            ]}
                            style={{ height: 400+'px', width: 400+'px'}}
                        ></ParallaxBanner>
            </Parallax>
        )
    }
}

export default Hero
