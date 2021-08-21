import React, { Component } from 'react'
import SelectionCard from './SelectionCard'

class UserSelection extends Component {
    
    render() {
        return (
            <div>
                User Selection: <br/>
                {this.props.userPage}
                {/* trying to layout using bootstrap for the content... */}
                <div className="selection-btn">
                    <div className="page-btn btn-L" >
                        <button onClick={this.onClickChange}></button>
                    </div>
                    <div className="page-btn btn-R" onChange={this.onClickChange}>
                        <button onClick={this.onClickChange}></button>
                    </div>
                </div>
                
                <div className="row justify-content-center selection-main-box">
                    <div className="row justify-content-between selection-box">
                        <SelectionCard/>
                    </div>
                </div>
            </div>
        )
    }

    onClickChange(event) {
        // if currentPage is Weapon and btn-L is clicked || currentPage is Name and btn-R is clicked, render Location
        console.log("testing")
        // else if currentPage is Location and btn-L is clicked || currentPage is Weapon and btn-R is clicked, render Name

        //else if currentPage is Name and btn-L is clicked || currentPage is Location and btn-R is clicked, render Weapon
    }
}

export default UserSelection
