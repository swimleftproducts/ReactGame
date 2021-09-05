import React, { Component } from 'react';
import UserResults from './UserResults';
import StoryResults from './StoryResults';

const outComeText = "You chose correctly!"

class Results extends Component {
    
    render() {
        return (
            <div className="results p-2 row">
                <UserResults outComeText={outComeText} userChoice={this.props.userChoice}/>
                <StoryResults correctResults={this.props.correctResults}/>
            </div>
        )
    }
}

export default Results