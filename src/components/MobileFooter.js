import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax'

import madewithbulma from '../images/made-with-bulma--white.png'

class Footer extends Component {
    render() {
        return(
            <Parallax className="footer" disabled={true}>
                <div className="footer-mobile">
                    <div className="mobile-footer-links">
                            <ul className="mobile-icon-list">
                                <li><a href="https://github.com/vikramraisharma"> <i className="fab fa-github" style={{fontSize: 3 + 'rem', color: 'var(--sky)'}} target="_blank" rel="noopener noreferrer"/> </a></li>
                                <li><a href="https://www.instagram.com/thebusinessbeard/"> <i className="fab fa-instagram" style={{fontSize: 3 + 'rem', color: 'var(--sky)'}} target="_blank" rel="noopener noreferrer"/> </a></li>
                                <li><a href="https://www.linkedin.com/in/vikramraisharma/"> <i className="fab fa-linkedin" style={{fontSize: 3 + 'rem', color: 'var(--sky)'}} target="_blank" rel="noopener noreferrer"/> </a></li>
                            </ul>
                    </div>
                    <div className="bulma-img-mobile">
                        <a href="https://bulma.io">
                            <img src={madewithbulma} alt="Made with Bulma" width="171" height="32"/>
                        </a>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Footer
