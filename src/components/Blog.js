import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

class Blog extends Component {
    render() {
        return(
            <Parallax y={[-9, 9]} tagOuter="figure" className="blog">
                    <h1 className="blog-title">Blog</h1>
                    <div className="tile is-parent is-vertical is-11">  
                        <article className="tile is-child notification blog-post">
                            <a href="https://medium.com/@vikram.sharma1024/what-coding-boot-camps-miss-875cc0dba08c"  target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <h1 className="title">What Coding Boot-camps Miss</h1>
                                <p className="subtitle">I noticed one major flaw with the boot-camp teaching philosophy: I was taught how to code, but not how to think...</p>
                            </a>
                        </article>
                        <article className="tile is-child notification blog-post">
                            <a href="https://medium.com/@vikram.sharma1024/tldr-work-smart-not-hard-46bbc4a5fcc8" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <h1 className="title">TLDR: Work Smart, not Hard</h1>
                                <p className="subtitle">Especially after spending a few years in community college, I felt very out of touch with my innate human desire to challenge myself...</p>
                             </a> 
                        </article>                      
                        <article className="tile is-child notification blog-post">
                            <a href="https://medium.com/@vikram.sharma1024/putting-on-the-black-hat-414fb4164e7a" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <h1 className="title">Putting on the Black Hat</h1>
                                <p className="subtitle">Enter Blackhat Technologies. I spent time crafting a brand to embody the type of systems I wanted to build: streamlined, stylish, and individualistic...</p>
                            </a>
                        </article>                      
                    </div>
            </Parallax>
        )
    }
}

export default Blog
