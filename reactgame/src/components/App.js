import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import Nav from './Nav';
import Hints from './Hints';
import Background from './Background';
import gameSetUp from '../gameContent/Storylines';
import Selection from './Selection';
import Results from './Results';



const correctResults = [
    {
        imgSrc: "./assets/2/nazgul.jpeg",
        text: "Nazgul",
        id: "nazgul"
    },
    {
        imgSrc: "./assets/2/glamdring.jpeg",
        text: "Glamdring",
        id: "glamdring"
    },
    {
        imgSrc: "./assets/2/hobbiton.jpeg",
        text: "Hobbiton",
        id: "hobbiton"
    }
];

const App = () => {
    //this is for setting the page that is shown
    const [userPage, setUserPage] = useState('Intro');

    // this is for story we are playing
    const [story, setStory] = useState('');
    //this is for setting user selection
    const [userChoice, setUserChoice] = useState([
        {
            imgSrc: "./assets/2/question_mark.png",
            text: "",
            id: "",
            type: "SelectWeapon"
        },
        {
            imgSrc: "./assets/2/question_mark.png",
            text: "",
            id: "",
            type: "SelectName"
        },
        {
            imgSrc: "./assets/2/question_mark.png",
            text: "",
            id: "",
            type: "SelectLocation"
        }
    ]);

    // const [userChoice, setUserChoice]= useState([
    //     {Value: "Weapone",
    //      imgSrc:"../assets/2/glamdring.jpeg",
    //      text:"Glamdring",
    //      id: "glamdring"
    //     },
    //     {Value: "Name",
    //      imgSrc:"../assets/2/nazgul.jpeg",
    //      text:"Nazgul",
    //      id:"nazgul"
    //     },
    //     {Value: "Location",
    //      imgSrc:"../assets/2/hobbiton.jpeg",
    //      text:"Hobbiton",
    //      id:"hobbiton"
    //     }
    // ])

    useEffect(() => {
        const newStory = gameSetUp.choose();
        setStory(newStory);


    }, []);



    const decideWhatToShow = (userPage) => {

        if (userPage === 'Intro') {
            return (
                <Intro setUserPage={ setUserPage } />
            );
        } else if (userPage === "Background") {
            return (
                <Background setUserPage={ setUserPage } />
            );
        } else if ((userPage === "HintsWeapon") || (userPage === "HintsLocation") || (userPage === "HintsName")) {
            return (
                <Hints story={ story } userPage={ userPage } setUserPage={ setUserPage } />
            );
        } else if ((userPage === "SelectWeapon") || (userPage === "SelectLocation") || (userPage === "SelectName")) {
            return (
                <Selection userChoice={ userChoice } setUserChoice={ setUserChoice } story={ story } userPage={ userPage } setUserPage={ setUserPage } />
            );
        } else if ((userPage === "Results")) {
            return (
                <Results userChoice={ userChoice } correctResults={ correctResults } />
            );
        }
    };

    return (
        <div >

            { userPage !== "Intro" ? <Nav userPage={ userPage } setUserPage={ setUserPage } /> : null }

            { decideWhatToShow(userPage) }
        </div>

    );
};

export default App;