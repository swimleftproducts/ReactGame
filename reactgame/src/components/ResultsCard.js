import React, { Component } from 'react';

class ResultsCard extends Component {
    render () {
        return (
            <div className="card result-card col-xl-2 col-lg-3 col-md-3 col-sm-7">
                <img src={ this.props.imgSrc } className="card-img-top" alt="..." />
                <div className="card-body my-0">
                    <p className="card-text text-center h1">{ this.props.text }</p>
                </div>
            </div>

        );
    }

}

export default ResultsCard;