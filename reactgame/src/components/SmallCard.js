import { render } from '@testing-library/react';
import React from 'react';

const SmallCard = ({detail,Title,Text,onClick}) => {
    const renderCard = () =>{
        
        if (detail==="") {
         return(
            <div onClick={(e) => { 
                e.stopPropagation()
                onClick()
                }} className="col-xs-12 col-sm-6 col-lg-4 border-2 border-secondary background-card card"  style={{"width":"18rem"}}>
                <img src="/assets/2/glamdring.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body card-body-box">
                <h5 className="card-text">{Title}</h5>
                <p className="card-text">{Text}</p>
            </div> 
        
            <div class="card-footer text-muted">
            click for more info
            </div>
            </div>
        )
        } else {
            return(
                <div onClick={(e) => { 
                    e.stopPropagation()
                    onClick()
                }} className="card selected-card "  style={{"width":"8rem"}}>
                    <img src="/assets/2/glamdring.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body card-body-box">
                        <h5 className="card-text text-center ">{Title}</h5>
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