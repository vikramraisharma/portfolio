import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardTitle: '',
            cardImage: '',
            cardText: ''
        }
    }

    function = (event) => {
        console.log(event);
    }

    render(){
        return(
            <div className="column is-half">
                {/*<img src={this.props.img} className="media-left" alt=""/>*/}
                <div className="card">
                    <p>
                        <header className="card-header">{this.props.title}</header>
                        <div className="card-image">
                            <figure className="image">
                                <img src={this.props.img}/>
                            </figure>
                        </div>
                        <div className="card-content">{this.props.text}</div>
                        <footer className="card-footer">
                            <a className="card-footer-item" href={this.props.link}>Go To Site</a>
                            <a className="card-footer-item" href={this.props.source}>View Source Code</a>
                        </footer>
                    </p>


                </div>
            </div>
        )
    }
}

export default Card
