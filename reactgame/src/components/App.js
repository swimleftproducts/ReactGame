import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import Nav from './Nav';
import Hints from './Hints';
import Background from './Background';
import gameSetUp from '../gameContent/Storylines';
import Selection from './Selection';
import Results from './Results';

// logic to choose the story line for this time through





// const correctResults = [
//     gameSetUp.stories[0].selectables.weapon[0],
//     {
//         imgSrc: "./assets/2/glamdring.jpeg",
//         text: "Glamdring",
//         id: "glamdring"
//     },
//     {
//         imgSrc: "./assets/2/hobbiton.jpeg",
//         text: "Hobbiton",
//         id: "hobbiton"
//     }
// ];

const App = () => {
    let correctResults = []

    //this is for setting the page that is shown
    const [userPage, setUserPage] = useState('Intro');

    // this is for story we are playing
    const [story, setStory] = useState({});
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

    useEffect(() => {
        const newStory = gameSetUp.choose();
        setStory(newStory);
        
    }, []);



    const decideWhatToShow = (userPage) => {

        if (userPage === 'Intro') {
            return (
                <Intro imgSrc={story.introImageSrc} title={story.title} setUserPage={ setUserPage } />
            );
        } else if (userPage === "Background") {
            return (
                <Background backGroundInfo = {story.background} setUserPage={ setUserPage } />
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
            console.log(story)
            correctResults = [
                story.selectables.weapon[0],
                story.selectables.name[0],
                story.selectables.location[0],
            ];
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