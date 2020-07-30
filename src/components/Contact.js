import React, {Component} from 'react'

class Contact extends Component{
    state = {
        name: '',
        email: '',

    }

    handleChange = (e) => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value })

    }

    render(){
        return(
            <div className="container form-box">
                <h1 className="title is-2">Let's Connect!</h1>
                    <div className="navbar">
                            <a className="navbar-item button is-dark is-large" href="https://www.linkedin.com/in/vikramraisharma/" target="_blank">LinkedIn</a>
                            <a className="navbar-item button is-dark is-large" href="https://medium.com/@vikram.sharma1024" target="_blank">Blog</a>
                            <a className="navbar-item button is-dark is-large" href="https://github.com/vikramraisharma" target="_blank">GitHub</a>
                    </div>

                    <form action="mailto:vikram.sharma1024@gmail.com" method="post" encType="text/plain">
                        <div className="form-group">
                            <div className="field">
                                <label className="label">Name</label>

                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Your name here" value={this.state.name} id="name" onChange={this.handleChange}/>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email:</label>
                                <div className="control has-icons-left">
                                    <input className="input" type="email" placeholder="example@email.com" value={this.state.email} id="email" onChange={this.handleChange}/>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </span>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Inquiry:</label>
                                <div className="control has-icons-left">
                                    <input className="input" type="text" placeholder="Your inquiry here" value={this.state.inquiry} id="inquiry" onChange={this.handleChange}/>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-question-circle"></i>
                                        </span>
                                </div>
                            </div>

                            <div className="field is-grouped buttons">
                            <div className="control">
                                <input type="submit" value="Send" className="button is-primary" />
                            </div>
                            <div className="control">
                                <input type="reset" value="Reset" className="button is-secondary" />
                            </div>

                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Contact
