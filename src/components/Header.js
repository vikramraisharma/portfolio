import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax'

import resume from '../images/resume.pdf'

class Header extends Component {
    render() {
        return(
            <Parallax className="header" disabled={true}>
                <div className="level">
                    <div className="level-left">
                        <p style={{fontSize: 2 + 'rem'}}>vikram rai sharma</p>
                        
                    </div>
                    <div className="level-right">
                        <a href="https://www.linkedin.com/in/vikramraisharma/" className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}} target="_blank" rel="noopener noreferrer">
                            <p>linkedin</p>
                        </a>
                        <a href={resume} className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}} target="_blank" rel="noopener noreferrer">
                            <p>resume</p>
                        </a>
                        <a href="mailto:vikram.sharma1024@gmail.com" className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}} target="_blank" rel="noopener noreferrer">
                            <p>email me</p>
                        </a>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Header