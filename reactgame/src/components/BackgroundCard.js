import React, { Component } from 'react';

class BackgroundCard extends Component {
    render() {
        return (
         <div onClick={() => {
             if(this.props.displayDetail===""){
                this.props.onClick(this.props.id)
             }else{
                this.props.onClick("")
             }
             
         }} class="col-xs-12 col-sm-6 col-lg-4 border-2 border-secondary background-card card">
            <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
            <div class="card-body pb-0 mb-0">
                 <h5 class="card-title">BACKGROUND 1</h5>
                 <p className="card-text ">{this.props.text}</p>
            </div>
            <div class="card-footer text-muted">
                click for more info
            </div>
        </div>            
        )
    }
    
}

export default BackgroundCard