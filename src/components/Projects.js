import React, {Component} from 'react';

import Card from './Card'

import sg from './images/stomping-grounds.png'
import pg from './images/proving-grounds.png'
import sw from './images/star-wars.png'

class Projects extends Component{
    constructor(state){
        super(state)
        this.state = {
            img: '',
            title: '',
            text: '',
            link: ''
        }
    }
    render(){
        return(
            <div className="card-container">
                <Card title={'Stomping Grounds'} text={'E-Commerce fine boot store'} link={'https://enigmatic-mountain-68507.herokuapp.com/'} img={sg}/>
                <Card title={'Proving Grounds'} img={pg} text={'Personal training tracker app'} link={'https://vikram-project-2.herokuapp.com/exercises'}/>
                <Card title={'Star Wars MVPs'} text={'Application using AJAX requests to access an API'} link={'https://ne0nv0id.github.io/SEIR_Project_1/'} img={sw} />
                <Card title={'Final Project'}  text={'Error 9000: Still in development!'} link={'#'} img={''}/>
            </div>
        )
    }
}

export default Projects
