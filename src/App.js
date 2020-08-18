import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'


class App extends Component {
    componentDidMount(){
        console.log('under development');
    }
    render(){
        return(
            <div className="container">
                <div id="wrapper">
                    <Header />
                    <Hero />
                    <Projects />
                    <Blog />
                </div>
                <Footer/>
            </div>
        )
    }

}

export default App

