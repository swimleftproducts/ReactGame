import React, { Component } from 'react';
import SelectionCard from './SelectionCard';
import UserChoice from './UserChoice';


class Selection extends Component {


    render () {
        return (
            <div className="selection-page container-fluid row flex-row-reverse flex-j-a p-4">
                <div className="current-selection col-xl-3 col-lg-12 flex-xl-column flex-lg-row flex-md-row ">
                    { this.renderUserChoice() }
                </div>
                <div className="selection-box col-xl-9 flex-wrap">
                    { this.renderSelectionCard() }
                </div>
                <div className="text-center btn-selection ">
                    <button className="btn btn-primary btn-lg " onClick={ () => { this.props.setUserPage("Results"); } }> Ready to the result?</button>
                </div>
            </div>
        );
    }
    renderUserChoice () {
        return (this.props.userChoice.map((iterator) => {
            return (
                <UserChoice userChoice={ iterator } setUserPage={ this.props.setUserPage } userPage={ this.props.userPage } />
            );
        })
        );
    }
    renderSelectionCard () {

        //pull array of options objects from story line


        let imgArray = [
            {
                imgSrc: "./assets/2/weaponimages/1.jpeg",
                text: "sample 1",
                id: "1"
            },
            {
                imgSrc: "./assets/2/weaponimages/2.jpeg",
                text: "sample 2",
                id: "2"
            },
            {
                imgSrc: "./assets/2/weaponimages/3.jpeg",
                text: "sample 3",
                id: "3"
            },
            {
                imgSrc: "./assets/2/weaponimages/5.jpeg",
                text: "sample 4",
                id: "4"
            },
            {
                imgSrc: "./assets/2/weaponimages/6.jpeg",
                text: "sample 5",
                id: "5"
            },
            {
                imgSrc: "./assets/2/weaponimages/1.jpeg",
                text: "sample 6",
                id: "6"
            }
        ];

        // add key of type with value of userPage onto each object inside of imgArray
        imgArray.forEach((imgObj) => {
            imgObj.type = this.props.userPage;
        });

        const listOfCards = imgArray.map((card) => {
            return (
                <SelectionCard onClickHandler={ this.props.setUserChoice } userPage={ this.props.userPage } userChoice={ this.props.userChoice } id={ card.id } key={ card.id } imgSrc={ card.imgSrc } text={ card.text } type={ card.type } />
            );

        });
        // this adds the breakpoints
        const w100 = <div className="w-100  hide-on-sm"></div>;
        const w100OnSm = <div className="w-100 display-on-sm"></div>;
        listOfCards.splice(3, 0, w100);
        listOfCards.splice(2, 0, w100OnSm);
        listOfCards.splice(6, 0, w100OnSm);

        return listOfCards;
    }

}

export default Selection;
