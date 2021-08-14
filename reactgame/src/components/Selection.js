import React, { Component } from 'react'

class UserSelection extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                User Selection <br/>
                {this.props.UserSelection}
            </div>
        )
    }
}

export default UserSelection