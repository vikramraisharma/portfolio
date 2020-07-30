import React, {Component} from 'react';

import Card from './Card'

import sg from './images/stomping-grounds.png'
import pg from './images/proving-grounds.png'
import sw from './images/star-wars.png'
import mr from './images/moon-river.png'

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
            <div className="columns is-multiline">

                <Card title={'TZO Strength'} text={`Web app designed to market power-lifting and strength coaching. This app is based in React, styled with Bootstrap, and is focused on meeting the client's aesthetic wants with their information needs. Currently, I am developing a Node back-end that uses JWT to let users log in, interact with their account, and receive specific information such as their program and their coach's library of helpful exercises.`} link={'https://tzo-strength.herokuapp.com/'} img={sw} source={''}/>

                <Card title={'Moon River'}  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet aliquam magna id mattis. Aenean mattis consectetur mi, in ultrices erat. Sed non libero urna. Nunc feugiat elit eu justo accumsan varius. Phasellus porta augue velit, id tempor ante maximus quis. Vestibulum lorem est, ornare nec lacus eu, gravida imperdiet nulla. Vivamus vel turpis sed ante elementum sagittis vitae eget sem.'} link={'https://moon-river-frontend.herokuapp.com/'} img={mr} source={''}/>

                <Card title={'Stomping Grounds'} img={sg} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet aliquam magna id mattis. Aenean mattis consectetur mi, in ultrices erat. Sed non libero urna. Nunc feugiat elit eu justo accumsan varius. Phasellus porta augue velit, id tempor ante maximus quis. Vestibulum lorem est, ornare nec lacus eu, gravida imperdiet nulla. Vivamus vel turpis sed ante elementum sagittis vitae eget sem.'} link={'https://enigmatic-mountain-68507.herokuapp.com/'} source={''}/>

                <Card title={'Proving Grounds'} img={pg} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet aliquam magna id mattis. Aenean mattis consectetur mi, in ultrices erat. Sed non libero urna. Nunc feugiat elit eu justo accumsan varius. Phasellus porta augue velit, id tempor ante maximus quis. Vestibulum lorem est, ornare nec lacus eu, gravida imperdiet nulla. Vivamus vel turpis sed ante elementum sagittis vitae eget sem.'} link={'https://vikram-project-2.herokuapp.com/exercises'} source={''}/>

            </div>
        )
    }
}

export default Projects
