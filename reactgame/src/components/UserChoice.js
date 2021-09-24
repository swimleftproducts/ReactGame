import React, { Component } from 'react'
// this may not be necessary?
class UserChoice extends Component {
    render(){
        return (
            <div class="card selected-card col-xl-6 col-lg-3 col-sm-3">
                <div className="card-img-top selected-card-img">
                    <img src={this.props.imgSrc} alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Weapon</h5>
                    <p className="card-text text-center">Click here to pick</p>
                </div>
            </div>
        )
    }
}

export default UserChoice