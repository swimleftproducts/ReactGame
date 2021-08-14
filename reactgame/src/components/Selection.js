import React, { Component } from 'react'

class UserSelection extends Component {
   
    render() {
        return (
            <div>
                User Selection: <br/>
                {this.props.userPage}
            </div>
        )
    }
}

export default UserSelection