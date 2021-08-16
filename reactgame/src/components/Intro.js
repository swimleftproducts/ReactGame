import React from 'react';
import "./Components.css"

const Intro = (props) => {

    return (
        <div className = "container-fluid intro-bg"  >
            <div className = "row align-items-center " style = { {"height": "100vh"} }>
                <div style = { {"background-color":"white", "height": "90vh" } } className = "col-6 center-box">
                    <div style = { {"background-color":"",  "height": "30vw", "width":"30vw","margin-left":"7vw"} }>
                        <img className = "img-fluid center-box" src = "assets/2/glamdring.jpeg" alt = 'test' style = { {"height": "100%", "width":"100%", "overflow": "hidden", "border-radius": "30px"} } />
                    </div>
                </div>
                <div style = { {"background-color":"white",  "height": "90vh"} } className = "col-6 center-box">
                     <div style = { {"background-color":"rgb(255,255,255)",  "height": "30vw", "width":"30vw","border-radius": "30px", "margin-right": "7vw"} } className = "center-box">
                        <h1>Welcome Gamer!</h1>
                        <button 
                            onClick = {() => {
                                props.onClick('Background')
                                }
                            }
                            className = "btn btn-primary btn-lg ">Ready to play?</button>
                    </div>


                </div>
               
            </div>
        </div>
    )
}   

export default Intro
     
<<<<<<< HEAD

/*{ <div className="col align-self-center " style={{"width": "100%"}}>
<img className="img-fluid" src="assets/2/glamdring.jpeg" alt='test'/>
</div>
<div className="col align-self-center justify-content-center" style={{"width": "100%"}}>
<h1>Welcome Gamer!</h1>
<button 
    onClick={() => {
    props.onClick('Background')
    }}
    className="btn btn-primary btn-lg ">Ready to play?</button>
</div> }*/
=======
>>>>>>> 530916c21b5233821b17adcab1891e215f7fdf54
