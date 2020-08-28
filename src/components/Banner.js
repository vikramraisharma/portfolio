import React, {Component} from 'react'
import {ParallaxBanner} from 'react-scroll-parallax'

import fourhundo from '../images/placeholder-400x400.png'
import twohundo from '../images/200-200-pixels.png'
// import galaxy from '../images/galaxy.jpg'

class Banner extends Component{
    render(){
        return(
            <ParallaxBanner
                            className="banner-class"
                            layers={[
                                { image: `${fourhundo}`, amount: 0.1},
                                { image: `${twohundo}`, amount: 0.2}
                            ]}
                            style={{
                                width: '400px',
                                height: '400px'
                            }}
                        >
            </ParallaxBanner>
        )
    }
}

export default Banner