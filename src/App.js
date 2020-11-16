import React, {Component} from 'react';
// import {  Parallax } from 'react-scroll-parallax';

import Header from './components/Header'
import MobileHeader from './components/MobileHeader'
import Hero from './components/Hero'
import MobileHero from './components/MobileHero'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'
import MobileFooter from './components/MobileFooter'

// var mobile = false;
// if(window.innerWidth < 800){
//     mobile = true;
// }

class App extends Component {
    
    constructor(props){
        super(props)
        this.state={
            isMobile: window.innerWidth < 800 || false
        }
    }
    componentDidMount(){
        console.log(this.state.isMobile);
    }
    render(){
        return(
            <div className="container">
                    {
                        this.state.isMobile
                        ? <MobileHeader/>
                        : <Header/>
                    }
                    { 
                        this.state.isMobile
                        ? <MobileHero/>
                        : <Hero/>
                    }
                    <Projects isMobile={this.state.isMobile}/>
                    <Blog  isMobile={this.state.isMobile}/>
                    {
                        this.state.isMobile
                        ? <MobileFooter/>
                        : <Footer/>
                    }          
            </div>
        )
    }

}

export default App
