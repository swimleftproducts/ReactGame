import React, { Component } from 'react'
import SelectionCard from './SelectionCard'


class Selection extends Component {


    render() {
        return (
            <div className="selection-page container-fluid row flex-row-reverse flex-j-a">
                <div className="current-selection col-xl-3 col-lg-12 flex-xl-column flex-lg-row flex-md-row ">
                    <div className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img src={this.props.userChoice[0].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Weapon</h5>
                            <p className="card-text text-center">Click here to reselect</p>
                        </div>
                    </div>
                    <div className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img  src={this.props.userChoice[1].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Click here to reselect</p>
                        </div>
                    </div>
                    <div className="card selected-card col-xl-6 col-lg-3 col-sm-3">
                        <div className="selected-card-img card-img-top">
                            <img  src={this.props.userChoice[2].imgSrc} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Location</h5>
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