import React from 'react';


const Intro = (props) => {
    const navDesign = "container-fluid intro-bg";

    return (
        <div className="intro-bg p-0 container-fluid flex-j-a ">
            <div className="glass flex-j-a flex-column flex-md-row">
                <div className="glass-container flex-j-a">
                    <img src="../assets/2/glamdring.jpeg" alt="" height="auto" width="400px" />
                </div>
                <div className="glass-container flex-j-a flex-column">

                    <h1>Welcome Gamer!</h1>
                    <button onClick={ () => {
                        props.setUserPage('Background');
                    } }
                        className="btn btn-primary btn-lg">Start Game</button>
                </div>
            </div>
        </div>
    );
};

export default Intro;
