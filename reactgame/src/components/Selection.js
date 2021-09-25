import React, { Component } from 'react'
import SelectionCard from './SelectionCard'


class Selection extends Component {


    render() {
        return (
            <div className="selection-page container-fluid row flex-row-reverse flex-j-a">
                <div className="current-selection col-xl-3 col-lg-12 flex-xl-column flex-lg-row flex-md-row ">
                    <div onClick={()=>{this.props.setUserPage("SelectWeapon")}} className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img src={this.props.userChoice[0].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Weapon</h5>
                            <p className="card-text text-center">Click here to reselect</p>
                        </div>
                    </div>
                    <div onClick={()=>{this.props.setUserPage("SelectName")}}className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img  src={this.props.userChoice[1].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Click here to reselect</p>
                        </div>
                    </div>
                    <div onClick={()=>{this.props.setUserPage("SelectLocation")}}className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img  src={this.props.userChoice[2].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center col-xs-h6 ">Location</h5>
                            <p className="card-text text-center">Click here to reselect</p>
                        </div>
                    </div>
                </div>
                <div className="selection-box col-xl-9 flex-wrap">
                    {this.renderSelectionCard()}
                </div>
            </div> 
        ) 
    }   

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
                <SelectionCard  onClickHandler={this.props.setUserChoice} userPage={this.props.userPage} userChoice={this.props.userChoice} id={card.id} key={card.id} imgSrc={card.imgSrc} text={card.text} />
            )
            
        })
        // this adds the breakpoints
        const w100 = <div className="w-100  hide-on-sm"></div>;
        const w100OnSm = <div className="w-100 display-on-sm"></div>;
        listOfCards.splice(3, 0, w100)
        listOfCards.splice(2, 0, w100OnSm)
        listOfCards.splice(6, 0, w100OnSm)
        console.log(listOfCards)
        
        return  listOfCards ;
    }
   
}

export default Selection
