import React from 'react';
import correctAnswer from './CorrectAnswer';



const Results = () => {

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

    const listOfCorrectCards = correctImgArray.map((card) => {
        return (
            <correctAnswer imgSrc={card.imgSrc} text={card.text} key={card.id}/>
        )
    });
    console.log(listOfCorrectCards)
    

    return (
        <div>
            <ul>
                <li className="card">
                    <div className="card-body">
                        <p className="card-text h1">This is the correct answer</p>
                    </div>
                </li>
                {listOfCorrectCards}
            </ul>
        </div> 
    )
}

export default Results