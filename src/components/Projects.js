import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Plant from '../images/plantarion.png'
import Stomping from '../images/stomping.png'
import Tzo from '../images/tzo.png'
import Dsiac from '../images/dsiac.png'

class Projects extends Component{
    render(){
        return(
            <Parallax y={[-15, 15]} tagOuter="figure" className="project-plx" disabled={this.props.isMobile}>
                <h1 className="pj-title">Projects</h1>
                <div className="projects tile">
                        <div className="tile is-parent is-vertical is-7">
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://www.plantarion.com/">
                                    <figure className="image is-4by3">
                                        <img src={Plant} alt="plant-based service and food startup" />
                                    </figure>
                                </a>
                                <p>Plantarion -- Plant-based startup aimed at connecting PB service providers to consumers</p>
                            </article>
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://tzo-strength.herokuapp.com/">
                                    <figure className="image is-4by3">
                                        <img src={Tzo} alt="strength coaching web app" />
                                    </figure>
                                </a>
                                <p>TZO Strength -- A commissioned web app to market strength training and powerlifting coach Abiy Ababu</p>
                            </article> 
                        </div>
                        <div className="tile is-parent is-vertical is-7">
                            <article className="tile is-child notification hvr-grow">
                                <a href="https://www.dsiac.org/">
                                    <figure className="image is-4by3">
                                        <img src={Dsiac} alt="project number 4 on display" />
                                    </figure>
                                </a>
                                <p>Defense Systems IAC -- Govt Contractor dedicated to military research efforts and report writing</p>
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
                </div>
            </Parallax>
        )
    }
}

export default Projects
