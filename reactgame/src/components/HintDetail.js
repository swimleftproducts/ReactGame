import React from 'react';

const HintDetail = ({detail, setDetail,title,content}) => {
    
    
    return (
        <div className="container-fluid  gx-5">
            <div onClick={() => {setDetail("")}} className="row justify-content-center align-items-center" style={{"border":"grey solid 5px"}}>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-4 .h-centering"  style={{"padding":"1rem"}}>
                        <img className="justify-content-center" style={{"height":"300px"}} src="/assets/2/nazgul.jpeg" alt={detail}/>
                    </div>
                    <div className=" row text-center col-12 col-md-8">
                        <h5>{title}</h5>
                        <p style={{"width": "100%"}}>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
       
      
    )
}   

export default HintDetail