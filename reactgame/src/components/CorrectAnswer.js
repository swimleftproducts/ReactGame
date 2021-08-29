import React, { Component } from 'react';

class CorrectAnswer extends Component {
    render() {
        return (
            <ul className="card row justify-content-center" style={{"width":"18rem"}}>
                <li>
                    <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text h1">{this.props.text}</p>
                    </div>
                </li>
            </ul>
            
        )
    }
    
}

export default CorrectAnswer