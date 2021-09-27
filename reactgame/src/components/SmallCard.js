import { render } from '@testing-library/react';
import React from 'react';

const SmallCard = ({detail,Title,Text,onClick}) => {
    const renderCard = () =>{
        
        if (detail==="") {
         return(
            <div className="card selected-card">
                <div onClick={(e) => { 
                e.stopPropagation()
                onClick()
                }} className="selected-card-img card-img-top">
                    <img src="/assets/2/glamdring.jpeg" alt="..."/>
                </div>
                <div className="card-body card-body-box flex-j-a">
                    <h4 class="card-text text-center h5">{Title}</h4>
                </div> 
        
                <div class="card-footer text-muted">
                    click for more info
                </div>
            </div>
        )
        } else {
            return(
                <div className="card selected-card">
                    <div onClick={(e) => { 
                        e.stopPropagation()
                        onClick()
                    }} className="selected-card-img card-img-top">
                        <img src="/assets/2/glamdring.jpeg" alt="..."/>
                    </div>

                    <div className="card-body card-body-box">
                        <h4 className="card-text text-center h5 ">{Title}</h4>
                    </div> 

                    <div class="card-footer text-muted">
                        click to go back
                    </div>
                </div>
            )  
        }
    }

   

    return (
    <>
        {renderCard()}
    </>
      
    )
}   

export default SmallCard

// return (
//     <div onClick={() => {
//         if(this.props.displayDetail===""){
//            this.props.onClick(this.props.id)
//         }else{
//            this.props.onClick("")
//         }
        
//     }} class="col-xs-12 col-sm-6 col-lg-4 border-2 border-secondary background-card card">
//        <img src={this.props.imgSrc} className="card-img-top" alt="..."/>
//        <div class="card-body pb-0 mb-0">
//             <h5 class="card-title">BACKGROUND 1</h5>
//             <p className="card-text ">{this.props.text}</p>
//        </div>
//        <div class="card-footer text-muted">
//            click for more info
//        </div>
//    </div>            
//    )