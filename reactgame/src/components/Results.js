import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer';



class Results extends Component {

    render() {
        return (
            <div className="row justify-content-center selection-main-box">
                <div className="row justify-content-center selection-box">
                    <div className="">
                        <p className="">This is the correct answer</p>
                    </div>
                    {this.renderResultCard()}
                </div> 
                <div className="row justify-content-center selection-box">
                    {this.renderResultCard()}
                    <div>
                        <p className="">This is your choice</p>
                    </div>c
                </div>
            </div>
        )
    }

    renderResultCard() {
        const correctImgArray = [
            {imgSrc:"./assets/2/nazgul.jpeg",
             text:"Nazgul",
             id:"nazgul"
            },
            {imgSrc:"./assets/2/glamdring.jpeg",
             text:"Glamdring",
             id: "glamdring"
            },
            {imgSrc:"./assets/2/hobbiton.jpeg",
             text:"Hobbiton",
             id:"hobbiton"
            }
        ];
    
        const listOfCards = correctImgArray.map((card) => {
            return (
                <CorrectAnswer imgSrc={card.imgSrc} text={card.text} key={card.id}/>
            )
        });

        return listOfCards
    }
    
}

export default Results