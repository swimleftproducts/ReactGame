import React, { Component } from 'react';

// this may not be necessary?
class UserChoice extends Component {
    render () {
        return (
            <div onClick={ () => {
                console.log("user choice ", this.props.userChoice);
                this.props.setUserPage(this.props.userChoice.type);
            } } className={ `${this.props.userPage === this.props.userChoice.type ? "selected-card-active" : ""} card selected-card col-xl-6 col-lg-3 col-sm-3` }>
                <div className="selected-card-img card-img-top">
                    <img src={ this.props.userChoice.imgSrc } alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{ this.props.userChoice.type }</h5>
                    <p className="card-text text-center">{ this.props.userChoice.id === "" ? "Make selection" : "Click here to reselect" }</p>
                </div>
            </div>
        );
    }
}

export default UserChoice;