import React from 'react';
import correctAnswer from './CorrectAnswer';



const Results = () => {

    function correctAnswerContainer() {
        const correctImgArray = [
            {imgSrc:"./assets/2/nazgul.jpeg",
            text:"Nazgul",
            },
            {imgSrc:"./assets/2/glamdring.jpeg",
            text:"Glamdring",
            },
            {imgSrc:"./assets/2/hobbiton.jpeg",
            text:"Hobbiton",
            }
        ];
        const listOfCorrectCards = correctImgArray.map((card) => {
            return (
                <correctAnswer imgSrc={card.imgSrc} text={card.text}/>
            )
        })
    return listOfCorrectCards
    }

    return (
        <div>
            <ul>
                <li className="card">
                    <div className="card-body">
                        <p className="card-text">Correct Answer</p>
                    </div>
                </li>
                {correctAnswerContainer()}
            </ul>
        </div> 
    )
}

export default Results