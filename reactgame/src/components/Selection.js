import React, { Component } from 'react'
import SelectionCard from './SelectionCard'

class Selection extends Component {


    render() {
        return (
            <div className="selection-page container-fluid row flex-row-reverse flex-j-a">
                <div class="current-selection col-lg-3 col-md-12 flex-lg-column flex-md-row flex-sm-row ">
                    <div class="card selection-card col-lg-6w col-md-3 col-sm-3"></div>
                    <div class="card selection-card col-lg-6 col-md-3 col-sm-3"></div>
                    <div class="card selection-card col-lg-6 col-md-3 col-sm-3"></div>
                </div>
                
                <div className="selection-box col-lg-9 flex-wrap">
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

        return  listOfCards 
    }
}

export default Selection


/* trying to layout using bootstrap for the content... */
                /* <div className="selection-btn">
                    <div className="page-btn btn-L" onClick={()=>{console.log(this.props.userChoice)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="rgb(167, 7, 216)" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
                    </div>
                    <div className="page-btn btn-R" onClick={()=>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="rgb(167, 7, 216)" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
                    </div>
                </div> */