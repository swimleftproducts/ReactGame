import React from 'react';
import TextBox from './TextBox'
import ImageCard from './ImageCard'

const Hints = (props) => {
    const hint = props.story[`${props.userPage}`]
    const hint1 = props.story[`${props.userPage}1`]
    const hint2 = props.story[`${props.userPage}2`]
    return (
        <div style={{"height":"80vh"}}>
            <ImageCard/>
            <TextBox hint={hint} hint1={hint1} hint2={hint2}/>
        </div>
    )
}

export default Hints