import React, { Component } from 'react';
import {Parallax} from 'react-scroll-parallax';

class Blog extends Component {
    render() {
        return(
            <Parallax y={[-10, 10]} tagOuter="figure" className="blog">
                    <h1 className="blog-title">Blog</h1>
                    <div className="tile is-parent is-vertical is-11">  
                        <article className="tile is-child notification blog-post">
                            <a href="https://github.com/vikramraisharma/moon-river-api">
                                <h1 class="title">New Blog Post</h1>
                                <p class="subtitle">Lorem ipsum dolor sit amet lorem ipsem dolor sit amet lorem ipsup etdcdlfkajfieaj;ldskfje;ladsf fkdafi fielaidf e</p>
                            </a>
                        </article>
                        <article className="tile is-child notification blog-post">
                            <a href="https://medium.com/@vikram.sharma1024/tldr-work-smart-not-hard-46bbc4a5fcc8">
                                <h1 class="title">TLDR: Work Smart, not Hard</h1>
                                <p class="subtitle">Especially after spending a few years in community college, I felt very out of touch with my innate human desire to challenge myself...</p>
                             </a> 
                        </article>                      
                        <article className="tile is-child notification blog-post">
                            <a href="https://medium.com/@vikram.sharma1024/putting-on-the-black-hat-414fb4164e7a">
                                <h1 class="title">Putting on the Black Hat</h1>
                                <p class="subtitle">Enter Blackhat Technologies. I spent time crafting a brand to embody the type of systems I wanted to build: streamlined, stylish, and individualistic...</p>
                            </a>
                        </article>                      
                    </div>
            </Parallax>
        )
    }
}

export default Blog
