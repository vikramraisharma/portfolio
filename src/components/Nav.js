import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class Nav extends Component {
    render(){
        return(

            <Router>
                <div className="navbar navbar-expand-lg">
                    <ul className="nav nav-tabs">
                        <li className="">
                            <Link className="btn btn-warning" to="/">About</Link>
                        </li>
                        <li className="">
                            <Link className="btn btn-warning" to="/projects">Projects</Link>
                        </li>
                        <li className="">
                            <Link className="btn btn-warning" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="container-fluid content-section">
                    <Route path="/" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contact" exact component={Contact} />
                </div>
            </Router>
        )
    }
}

export default Nav
