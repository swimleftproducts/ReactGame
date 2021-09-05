import React, { Component } from 'react';
import ResultsCard from './ResultsCard';




class UserResults extends Component {

    render() {
        return (
            <div class="container-fluid row align-items-center justify-content-around box">
                <div class="container-box col-xl-3 col-lg-12 col-md-12 col-sm-12 sticky-top">{this.props.outComeText}</div>
                {this.renderResultCard(this.props.userChoice)}
            </div>
        )
    }

    renderResultCard(userChoice) {
       
    
        const listOfCards = userChoice.map((card) => {
            return (
                <ResultsCard imgSrc={card.imgSrc} text={card.text} key={card.id}/>
            )
        });

        return listOfCards
    }
    
}

export default UserResults