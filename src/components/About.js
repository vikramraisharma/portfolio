import React, {Component} from 'react';

class About extends Component {
    render(){
        return(

            <div className="container about">
                <div className="container">
                    <h1 className="title is-2">About me</h1>
                    <article>
                    <h1 className="subtitle is-3">Prior Education</h1>
                    <p className="about-p">Before  diving into the world of coding bootcamps and 60+ hour work weeks, I pursued a Bachelor's Degree in Cyber Security engineering. While enrolled full-time in college classes, I worked part-time in several different career fields. Along with part-time work to keep me busy, I managed my company Blackhat Tech: a system design and integration company. My goal with Blackhat was to build efficient, aesthetic, and powerful systems - and that goal has translated to my software development career.</p>
                    <h1 className="subtitle is-3">Enter General Assembly</h1>
                    <p className="about-p">The word "bootcamp" brings to mind a daunting, isolated, and militant experience. While far removed from combat, my time at GA checked every box within the realm of a bootcamp. Initially, we were loaded with what seemed like busy work: writing hundreds of repetitve lines of JavaScript, HTML, and CSS. Flash forward and here I am developing full CRUD applications using both JS and Ruby, hungry to learn more at every opportunity I am offered to so.</p>
                    </article>
                </div>
            </div>
        )
    }
}

export default About
