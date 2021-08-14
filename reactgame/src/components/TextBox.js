import React from 'react';

const TextBox = ({hint1,hint2,hint3,nextClickHandler}) => {
    
    return(
       <div className="card textbox" style={{"width": "18rem"}}>
            <div className="card-body">
                 <h5 class="card-title">{hint1}</h5>
                    <p className="card-text">{hint2+" "+hint3}</p>
            </div>
            <span onClick={() => {
               
                nextClickHandler()
            }} class="btn btn-primary">Onward</span>
        </div>
  
    )
}

export default TextBox;