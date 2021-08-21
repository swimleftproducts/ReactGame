import React, { Component } from 'react';


class SelectionCard extends Component {

    render() {
        return (
            <ul className="card selection-card">
                <li onClick={this.onClickChange}>
                    {/*SelectionImages */}
                    <img src={this.props.imgSrc} class="card-img-top" alt="..." />
                    <div className="card-body selection-card-text justify-content-center align-items-center">
                        {/* SeectionIds */}
                        <p className="card-text h1 text-white">{this.props.text}</p>
                    </div>
                </li>
            </ul>
        )
    }
    // Tracking User Interactions
    onClickChange(event) {
        //Selected choice will be added to userSelection[] from ./storyline.js
        console.log("You Selected This Item")
    }
}   

export default SelectionCard