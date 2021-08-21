import React from 'react';
import "./Components.css"

const Intro = (props) => {

    return (
        <div className = "container-fluid intro-bg"  >
            <div className = "row align-items-center " style = { {"height": "100vh"} }>
                <div style = { {"backgroundColor":"white", "height": "90vh" } } className = "col-6 center-box">
                    <div style = { {"backgroundColor":"",  "height": "30vw", "width":"30vw","marginLeft":"7vw"} }>
                        <img className = "img-fluid center-box" src = "assets/2/glamdring.jpeg" alt = 'test' style = { {"height": "100%", "width":"100%", "overflow": "hidden", "borderRadius": "30px"} } />
                    </div>
                </div>
                <div style = { {"backgroundColor":"white",  "height": "90vh"} } className = "col-6 center-box">
                     <div style = { {"backgroundColor":"rgb(255,255,255)",  "height": "30vw", "width":"30vw","borderRadius": "30px", "marginRight": "7vw"} } className = "center-box">
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
     
