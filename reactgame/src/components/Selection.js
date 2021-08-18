import React, { Component } from 'react'

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
                        <div className="card selection-card">
                            <img src="./assets/2/weaponimages/1.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text justify-content-center align-items-center">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>

                        <div className="card selection-card " style={{"width": "18rem"}}>
                            <img src="./assets/2/weaponimages/2.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text ">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>

                        <div className="card selection-card " style={{"width": "18rem"}}>
                            <img src="./assets/2/weaponimages/3.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>

                        <div className="card selection-card " style={{"width": "18rem"}}>
                            <img src="./assets/2/weaponimages/5.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>

                        <div className="card selection-card " style={{"width": "18rem"}}>
                            <img src="./assets/2/weaponimages/6.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>

                        <div className="card selection-card " style={{"width": "18rem"}}>
                            <img src="./assets/2/weaponimages/1.jpeg" class="card-img-top" alt="..." />
                            <div className="card-body selection-card-text">
                                <p className="card-text h1 text-white">The Gauntlet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSelection