import React, {Component} from 'react';
// import {  Parallax } from 'react-scroll-parallax';

import Header from './components/Header'
import Hero from './components/Hero'
// import Banner from './components/Banner'
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
                    <Header/>
                    <Hero/>  
                    <Projects/>
                    <Blog />
                    <Footer/>            
            </div>
        )
    }

}

export default App
