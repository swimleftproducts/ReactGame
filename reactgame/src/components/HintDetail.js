import React from 'react';

const HintDetail = ({detail, setDetail,title,content}) => {
    
    return (
        <div className="container-fluid  gx-5">
             <div onClick={() => {   setDetail("")}}
             className=" px-4 container-fluid" style={{"border":"grey solid 5px"}}>
            
            <div className="gx-1 gy-2 row align-items-center justify-content-evenly "
            style={{"height":"350px"}}
            >
                <div className=" text-center col-5">
                    <img src="/assets/2/nazgul.jpeg"
                        style={{"height":"250px"}}
                        alt={detail}
                    />
                </div>
                <div className="text-center col-4">
                    <h5>{title}</h5>
                    <p>
                        {content}
                    </p>
                </div>
            </div>
           
        </div>
        </div>
       
      
    )
}   

export default HintDetail