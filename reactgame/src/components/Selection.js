import React, { Component } from 'react'
import SelectionCard from './SelectionCard'

class UserSelection extends Component {
    // gameSetup.stories[this.story].images.(weapon/name/location).image

    renderSelectionCard (){
        const imgArray = [
            {imgSrc:"./assets/2/weaponimages/1.jpeg",
            text: "sample 1",
            id:"1"},
            {imgSrc:"./assets/2/weaponimages/2.jpeg",
            text: "sample 2",
            id:"2"},
            {imgSrc:"./assets/2/weaponimages/3.jpeg",
            text: "sample 3",
            id:"3"},
            {imgSrc:"./assets/2/weaponimages/5.jpeg",
            text: "sample 4",
            id:"4"},
            {imgSrc:"./assets/2/weaponimages/6.jpeg",
            text: "sample 5",
            id:"5"},
            {imgSrc:"./assets/2/weaponimages/1.jpeg",
            text: "sample 6",
            id:"6"}
        ]

        const listOfCards = imgArray.map((card) => {
            return(
                <SelectionCard onClickHandler={""} id={card.id} key={card.id} imgSrc={card.imgSrc} text={card.text} />
            )
        })

        return  listOfCards 
    }

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
                       
                        {this.renderSelectionCard()}
                        
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
