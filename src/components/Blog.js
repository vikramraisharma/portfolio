import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return(
            <div className="blog">
                    <div className="tile is-parent is-vertical is-11">
                        <article className="tile is-child notification blog-post">
                            <h1 class="title">Wide tile</h1>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                        <article className="tile is-child notification blog-post">
                            <h1 class="title">Wide tile</h1>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                        <article className="tile is-child notification blog-post">
                            <h1 class="title">Wide tile</h1>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                    </div>
            </div>
        )
    }
}

export default Blog
