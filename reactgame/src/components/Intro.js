import React from 'react';
import "./Components.css"

const Intro = (props) => {


    return(
        <div>
            <img className="img-fluid" src="https://wallpaperaccess.com/full/396534.jpg" alt='test'/>
            <button 
                onClick={() => {
                props.onClick('Hints')
                }}
                className="btn btn-primary btn-lg  introButton">Ready to play?</button>

        </div>
    )
}   

export default Intro
