import React from 'react';

const TextBox = (props) => {
    
    return(
        <div>
            {props.hint}
            <br/>
            {props.hint1}
            <br/>
            {props.hint2}
            
        </div>
    )
}

export default TextBox;