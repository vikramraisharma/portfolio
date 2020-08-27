import { ParallaxProvider } from 'react-scroll-parallax';
import React, {Component} from 'react';
import App from './App'

class AppContainer extends Component {
    render(){
        return(
            <ParallaxProvider>
                <App/>
            </ParallaxProvider>
        )
    }
}

export default AppContainer