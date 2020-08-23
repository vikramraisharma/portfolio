import React, {Component} from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
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
                    <Header style={{position: 'fixed'}}/>
                    <ParallaxProvider className="provider-class">
                        <Parallax y={[-30, 0]} tagOuter="figure" className="parallax-class">
                            <Hero />   
                        </Parallax>        
                        <Parallax y={[-30, 30]} tagOuter="figure" className="parallax-class">
                            <Projects/>
                        </Parallax>
                        <Parallax y={[-30, 30]} tagOuter="figure" className="parallax-class">
                            <Blog />
                        </Parallax>
                    </ParallaxProvider>
                    <Footer/>
                </div>
                
            </div>
        )
    }

}

export default App

