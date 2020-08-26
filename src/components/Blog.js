import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return(
            <div className="blog">
                    <div className="tile is-parent is-vertical is-11">\
                        <a href="#">
                            <article className="tile is-child notification blog-post">
                                <h1 class="title">New Blog Post</h1>
                                <p class="subtitle">Lorem ipsum dolor sit amet lorem ipsem dolor sit amet lorem ipsup etdcdlfkajfieaj;ldskfje;ladsf fkdafi fielaidf e</p>
                            </article>
                        </a>
                        <a href="https://medium.com/@vikram.sharma1024/tldr-work-smart-not-hard-46bbc4a5fcc8">
                            <article className="tile is-child notification blog-post">
                                <h1 class="title">TLDR: Work Smart, not Hard</h1>
                                <p class="subtitle">Especially after spending a few years in community college, I felt very out of touch with my innate human desire to challenge myself...</p>
                            </article>
                        </a>
                        <a href="https://medium.com/@vikram.sharma1024/putting-on-the-black-hat-414fb4164e7a">
                            <article className="tile is-child notification blog-post">
                                <h1 class="title">Putting on the Black Hat</h1>
                                <p class="subtitle">Enter Blackhat Technologies. I spent time crafting a brand to embody the type of systems I wanted to build: streamlined, stylish, and individualistic...</p>
                            </article>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Blog
