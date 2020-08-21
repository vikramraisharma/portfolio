import React, {Component} from 'react';

class Projects extends Component{
    render(){
        return(
            <div className="projects tile">
                    <div className="tile is-parent is-vertical is-5">
                        <article className="tile is-child notification is-warning hvr-grow" >
                            <p>lorem ipsum dolor sit amet</p>
                        </article>
                        <article className="tile is-child notification is-warning hvr-grow">
                            <p>lorem ipsum dolor sit amet</p>
                        </article>
                    </div>
                    <div className="tile is-parent is-vertical is-5">
                        <article className="tile is-child notification is-warning hvr-grow">
                            <p>lorem ipsum dolor sit amet</p>
                        </article>
                        <article className="tile is-child notification is-warning hvr-grow">
                            <p>lorem ipsum dolor sit amet</p>
                        </article>
                    </div>
            </div>
        )
    }
}

export default Projects
