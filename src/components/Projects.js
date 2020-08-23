import React, {Component} from 'react';

class Projects extends Component{
    render(){
        return(
            <div className="project-plx">
                <h1 className="title">Projects</h1>
                <div className="projects tile">
                        <div className="tile is-parent is-vertical is-6">
                            <article className="tile is-child notification is-warning hvr-grow" >
                                <p>lorem ipsum dolor sit amet</p>
                            </article>
                            <article className="tile is-child notification is-warning hvr-grow">
                                <p>lorem ipsum dolor sit amet</p>
                            </article>
                        </div>
                        <div className="tile is-parent is-vertical is-6">
                            <article className="tile is-child notification is-warning hvr-grow">
                                <p>lorem ipsum dolor sit amet</p>
                            </article>
                            <article className="tile is-child notification is-warning hvr-grow">
                                <p>lorem ipsum dolor sit amet</p>
                            </article>
                        </div>
                </div>
            </div>
        )
    }
}

export default Projects
