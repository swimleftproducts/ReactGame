import React from 'react';

const SelectionCard = ({Title,Text,onClick}) => {
    
    return (

        // <div onClick={() => { onClick()}} className="card" style={{"width":"18rem"}}>
        //      <img src="/assets/2/glamdring.jpeg" class="card-img-top" alt="..."/>
        //      <div className="card-body">
        //         <h5 className="card-title">{Title}</h5>
        //         <p className="card-text">{Text}</p>
        //         <p className="fst-italic">more info</p>
        //     </div>
        // </div>
        <div className="card selection-card">
            <img src="./assets/2/weaponimages/3.jpeg" class="card-img-top" alt="..." />
            <div className="card-body selection-card-text justify-content-center align-items-center">
                <p className="card-text h1 text-white">The Gauntlet</p>
            </div>
        </div>
    )
}   

export default SelectionCard