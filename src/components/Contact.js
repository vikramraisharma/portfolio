import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h2>Let's Connect!</h2>
                    <div className="contact-list">
                        <div className="list-group list-group-horizontal">
                            <a className="list-group-item" href="https://www.linkedin.com/in/vikramraisharma/" target="_blank">LinkedIn</a>
                            <a className="list-group-item" href="https://github.com/ne0nv0id" target="_blank">GitHub</a>
                            <a className="list-group-item" href="https://medium.com/@vikram.sharma1024" target="_blank">Blog</a>
                        </div>
                    </div>

                    <form action="mailto:vikram.sharma1024@gmail.com" method="post" enctype="text/plain">
                        <div className="form-group">
                            <label for="name">Name: </label>
                            <input type="text" name="name" className="form-control"></input> <br/>
                            <label for="mail">Your Email: </label>
                            <input type="text" name="email" className="form-control"></input> <br/>
                            <label for="inquiry">Inquiry: </label>
                            <input type="" name="inquiry" className="form-control"></input> <br/>
                            <div className="input-group">
                            <input type="submit" value="Send" className="btn btn-outline-warning" />
                            <input type="reset" value="Reset" className="btn btn-outline-danger" />
                            </div>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Contact
