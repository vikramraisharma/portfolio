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
            <div className="card index-card" style={{width: '15rem'}}>
                <img src={this.props.img} className="card-img-top" alt="" width="2" height="200"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    <a href={this.props.link} className="btn btn-warning">Link</a>
                </div>
            </div>
        )
    }
}

export default Card
