import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax'

import resume from '../images/resume.pdf'

class MobileHeader extends Component {
    render() {
        return(
            <Parallax className="header" disabled={true}>
                <div className="header-mobile">
                    <div className="mobile-title">
                        <h1 className="mobile-name">
                            vikram rai sharma
                        </h1>
                    </div>
                    <div className="mobile-links">
                        <ul className="mobile-link-list">
                            <li><a href="https://www.linkedin.com/in/vikramraisharma/" className="mh-link" target="_blank" rel="noopener noreferrer">linkedin</a></li>
                            <li><a href={resume} className="mh-link" target="_blank" rel="noopener noreferrer">resume</a></li>
                            <li><a href="mailto:vikram.sharma1024@gmail.com?subject=email%20From Your Portfolio..." className="mh-link" target="_blank" rel="noopener noreferrer">email me</a></li>
                        </ul>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default MobileHeader