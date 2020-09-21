import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax'

import madewithbulma from '../images/made-with-bulma--black.png'

class Footer extends Component {
    render() {
        return(
            <Parallax className="footer" disabled={true}>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <a href="https://bulma.io">
                                <img src={madewithbulma} alt="Made with Bulma" width="171" height="32"/>
                            </a>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <a href="https://www.instagram.com/thebusinessbeard/"> <i className="fab fa-instagram" style={{fontSize: 1.25 + 'rem', color: 'var(--navy)'}}/> </a>
                        </div>
                        <div className="level-item">
                            <a href="https://github.com/vikramraisharma"> <i className="fab fa-github" style={{fontSize: 1.25 + 'rem', color: 'var(--navy)'}}/> </a>
                        </div>
                        <div className="level-item">
                            <a href="https://www.linkedin.com/in/vikramraisharma/"> <i className="fab fa-linkedin" style={{fontSize: 1.25 + 'rem', color: 'var(--navy)'}}/> </a>
                        </div>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Footer

{/* <div className="level-item has-text-centered">
<a href="mailto:vikram.sharma1024@gmail.com" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}}>
    <p>email me</p>
</a>    
</div>        */}