import React, { Component } from 'react';
import CorrectAnswer from './CorrectAnswer';



class Results extends Component {

    render() {
        return (
            <div className="row justify-content-center selection-main-box">
                <div className="row justify-content-center selection-box">
                    <ul className="card row" style={{"width":"18rem"}}>
                        <li>
                            <div className="card-body">
                                <p className="card-text h1">This is the correct answer</p>
                            </div>
                        </li>
                        {this.renderResultCard()}
                    </ul>
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