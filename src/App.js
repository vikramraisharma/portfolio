import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Nav from './components/Nav'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import Banner from './components/Banner'

class App extends Component {
    componentDidMount(){
        console.log('under development');
    }
    render(){
        return(
            <div className="container">
                <Banner />
                <Nav />
            </div>
        )
    }

}

export default App

