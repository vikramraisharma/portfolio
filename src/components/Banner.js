import React, {Component} from 'react';

class Banner extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">
                        Vikram Rai Sharma
                        <br/>
                    </h1>
                    <h1 className="text-muted display-5">
                        A personal portfolio site
                    </h1>
                </div>
            </div>
        )
    }
}

export default Banner
