import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="level">
                    <div className="level-left">
                        <a href="#" className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 2 + 'rem'}}>
                            <p >vikram rai sharma</p>
                        </a>
                        
                    </div>
                    <div className="level-right">
                        <a href="https://www.linkedin.com/in/vikramraisharma/" className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}}>
                            <p>linkedin</p>
                        </a>
                        <a href="mailto:vikram.sharma1024@gmail.com" className="level-item has-text-centered hvr-grow" style={{color: 'var(--navy)', fontSize: 1.25 + 'rem'}}>
                            <p>email me</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header