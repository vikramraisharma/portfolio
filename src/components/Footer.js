import React, { Component } from 'react';
import madewithbulma from '../images/made-with-bulma--white.png'

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <a href="https://bulma.io">
                                <img src={madewithbulma} alt="Made with Bulma" width="192" height="36"/>
                            </a>
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <a href="#"> <i class="fab fa-instagram" style={{fontSize: 2 + 'rem', color: 'white'}}/> </a>
                        </div>
                        <div className="level-item">
                            <a href="#"> <i class="fab fa-github" style={{fontSize: 2 + 'rem', color: 'white'}}/> </a>
                        </div>
                        <div className="level-item">
                            <a href="#"> <i class="fab fa-linkedin" style={{fontSize: 2 + 'rem', color: 'white'}}/> </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer