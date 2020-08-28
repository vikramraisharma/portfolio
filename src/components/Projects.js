import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Sinatra from '../images/sinatra.png'
import Stomping from '../images/stomping.png'
import Tzo from '../images/tzo.png'

class Projects extends Component{
    render(){
        return(
            <Parallax y={[-15, 15]} tagOuter="figure" className="project-plx">
                <h1 className="pj-title">Projects</h1>
                <div className="projects tile">
                        <div className="tile is-parent is-vertical is-7">
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://tzo-strength.herokuapp.com/">
                                    <figure className="image is-4by3">
                                        <img src={ Tzo } alt="strength coaching web app"/>
                                    </figure>
                                </a>
                                <p>TZO Strength -- A commissioned web app to market strength training and powerlifting coach Abiy Ababu</p>
                            </article>
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://enigmatic-mountain-68507.herokuapp.com/">
                                    <figure className="image is-4by3">
                                        <img src={ Stomping } alt="boot retail site built in node and react"/>
                                    </figure>
                                </a>
                                <p>Stomping Grounds -- Mock e-commerce app to demonstrate proficiency with MERN stack</p>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical is-7">
                             <article className="tile is-child notification hvr-grow">
                                <a href="https://github.com/vikramraisharma/moon-river-api">
                                    <figure className="project-img is-flex">
                                        <img src={ Sinatra } alt="music blog inspired by Sinatra himself"/>
                                    </figure>
                                </a>
                                <p>Moon River -- A music blog with a back-end built in Sinatra.rb, Sinatra is a lightweight Ruby framework used for back and front end development.
                                </p>
                            </article>
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://github.com/vikramraisharma/moon-river-api">
                                    <figure className="image is-4by3">
                                        <img src={ Tzo } alt="project number 4 on display"/>
                                    </figure>
                                </a>
                                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                            </article>
                        </div>
                </div>
            </Parallax>
        )
    }
}

export default Projects
