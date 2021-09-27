import React from 'react';

const HintDetail = ({detail, setDetail,title,content}) => {
    
    
    return (
        <div className="col-12">
            <div onClick={() => {setDetail("")}} className="hintsDetail row m-0 container-fluid">
                <div className="hintsDetail-img-box col-lg-6 col-md-6 col-12 flex-j-a">
                    <img src="/assets/2/nazgul.jpeg" alt={detail}/>
                </div>
                    
                <div className="hintsDetail-text-box col-lg-6 col-md-6 col-12 flex-j-a">
                    <div className="">
                        <h5 className="text-center">{detail}</h5>
                        <p>{content}</p>
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