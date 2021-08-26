import React from 'react';

const correctAnswer = (props) => {
    return (
        <li className="card">
            <div>
                <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <p className="card-text h1">{this.props.text}</p>
            </div>
        </li>
    )
}

export default correctAnswer