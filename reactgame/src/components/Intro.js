import React from 'react';

const Intro = ({ imgSrc, title, setUserPage }) => {
  return (
    <div className="intro-bg p-0 container-fluid flex-j-a ">
      <div className="glass flex-j-a flex-column flex-md-row">
        <div className="glass-container flex-j-a">
          <img src={imgSrc} alt="" height="auto" width="400px" />
        </div>
        <div className="glass-container flex-j-a flex-column">
          <h1>{title}</h1>
          <button
            onClick={() => {
              setUserPage('Background');
            }}
            className="btn btn-primary btn-lg"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
