import React, { Component } from 'react'
import SelectionCard from './SelectionCard'

class UserSelection extends Component {
    
    render() {
        return (
            <div>
                User Selection: <br/>
                {this.props.userPage}
                {/* trying to layout using bootstrap for the content... */}
                <div className="selection-btn">
                    <div className="page-btn btn-L">
                        <a></a>
                    </div>
                    <div className="page-btn btn-R">
                        <a></a>
                    </div>
                </div>
                
                <div className="row justify-content-center selection-main-box">
                    <div className="row justify-content-between selection-box">
                        <SelectionCard/>
                        <SelectionCard/>
                        <SelectionCard/>
                        <SelectionCard/>
                        <SelectionCard/>
                        <SelectionCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSelection

// const listOfImages = gameSetUp.stories.images
// const SelectionCard = () => {
//     // let SelectionItemBox = []
//     for (let i = 0; i < 5; i++) {(
//         <div>
//             Hello World
//         </div>)
//     }
// }