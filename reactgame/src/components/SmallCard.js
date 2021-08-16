import React from 'react';

const SmallCard = ({Title,Text,onClick}) => {
    
    return (

        <div onClick={() => { onClick()}} className="card" style={{"width":"18rem"}}>
             <img src="/assets/2/glamdring.jpeg" class="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Text}</p>
                <p className="fst-italic">more info</p>
            </div>
        </div>
      
    )
}   

export default SmallCard