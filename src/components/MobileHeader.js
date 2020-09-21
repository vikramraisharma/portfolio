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
                    <div classname="mobile-links">
                        <ul className="mobile-link-list">
                            <li><a href="#" className="mh-link">linkedin</a></li>
                            <li><a href="#" className="mh-link">resume</a></li>
                            <li><a href="#" className="mh-link">email me</a></li>
                        </ul>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default MobileHeader