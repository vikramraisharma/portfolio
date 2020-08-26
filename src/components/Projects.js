import React, {Component} from 'react';

import Sinatra from '../images/sinatra.png'
import Stomping from '../images/stomping.png'
import Tzo from '../images/tzo.png'

class Projects extends Component{
    render(){
        return(
            <div className="project-plx">
                <h1 className="title">Projects</h1>
                <div className="projects tile">
                        <div className="tile is-parent is-vertical is-7">
                            <article className="tile is-child notification hvr-grow">
                                <figure className="project-img is-flex">
                                    <img src={ Sinatra }/>
                                </figure>
                                <p>Moon River -- A music blog with a back-end built in Sinatra.rb.
                                </p>
                            </article>
                            <article className="tile is-child notification hvr-grow">
                                <figure className="image is-4by3">
                                    <img src={ Stomping }/>
                                </figure>
                                <p>Stomping Grounds -- Mock e-commerce app to demonstrate proficiency with MERN stack</p>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical is-7">
                            <article className="tile is-child notification hvr-grow">
                                <figure className="image is-4by3">
                                    <img src={ Tzo }/>
                                </figure>
                                <p>TZO Strength -- A commissioned web app to market strength training and powerlifting coach Abiy Ababu</p>
                            </article>
                            <article className="tile is-child notification hvr-grow">
                                <p>lorem ipsum dolor sit amet</p>
                            </article>
                        </div>
                </div>
            </div>
        )
    }
}

export default Projects
