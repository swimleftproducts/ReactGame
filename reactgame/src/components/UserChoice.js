import React, { Component } from 'react'
// this may not be necessary?
class UserChoice extends Component {
    render(){
        return (
            <div class="card selected-card col-xl-6 col-lg-3 col-sm-3">
                <img src={this.props.imgSrc} alt="" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title text-center">Weapon</h5>
                    <p class="card-text text-center">Click here to pick</p>
                </div>
            </div>
        )
    }
}

export default UserChoice