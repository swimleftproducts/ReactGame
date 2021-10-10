import React, { Component } from 'react';
import ResultsCard from './ResultsCard';




class StoryResults extends Component {

    render () {
        return (
            <div class="container-fluid flex-row-reverse row align-items-center justify-content-around box">
                <div class="container-box col-xl-3 col-lg-12 col-md-12 col-sm-12 sticky-top">Correct answer was</div>
                { this.renderResultCard(this.props.correctResults) }
            </div>

        );
    }

    renderResultCard (correctResults) {


        const listOfCards = correctResults.map((card) => {
            return (
                <ResultsCard imgSrc={ card.imageSrc } text={ card.name } key={ card.id } />
            );
        });

        return listOfCards;
    }

}

export default StoryResults;