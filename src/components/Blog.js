import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return(
            <div className="blog">
                    <div className="tile is-parent is-vertical is-10">
                        <article className="tile is-child notification is-dark">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                        <article className="tile is-child notification is-dark">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                        <article className="tile is-child notification is-dark">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                        </article>
                    </div>
            </div>
        )
    }
}

export default Blog
