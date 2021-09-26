import React from 'react';

const HintDetail = ({detail, setDetail,title,content}) => {
    
    
    return (
        <div className="container-fluid col-12 ">

        <div onClick={() => {setDetail("")}} className="hintsDetail row ">
            <div className="col-md-12 col-lg-6 hintsDetail-img-box flex-j-a">
                <img className=""  src="/assets/2/nazgul.jpeg" alt={detail}/>
            </div>
                
            <div className="col-md-12 col-lg-6 hintsDetail-text-box flex-j-a col">
                <div className="">
                    <h2 className="text-center">{detail}</h2>
                    <p className="text-justify">{content}</p>
                </div>
               
            </div>
            
        </div>
        </div>
       
      
    )
}   

export default HintDetail

{/* <div className="container-fluid  gx-5">
            <div onClick={() => {setDetail("")}} className="row justify-content-center align-items-center">
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
        </div> */}