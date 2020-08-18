import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="level">
                    <div className="level-left">
                        <p className="level-item has-text-centered">
                            logo
                        </p>
                        <p className="level-item has-text-centered">
                            shortcut 1
                        </p>
                        <p className="level-item has-text-centered">
                            shortcut 2
                        </p>
                    </div>
                    <div className="level-right">
                        <p className="level-item has-text-centered">
                            contact me
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header