import React, { useState } from 'react';
import BackgroundCard from './BackgroundCard';
import BackgroundDetail from './BackgroundDetail';

const Background = ({ backGroundInfo, setUserPage }) => {
  const [displayDetail, setDisplayDetail] = useState('');
  // this is used to pull a single array out of the main info array for
  // the background section of the game
  const pullInfo = (displayDetail, array) => {
    return array[displayDetail];
  };

  const renderBackgroundCard = (backGroundInfo) => {
    
    const listOfCards = backGroundInfo.map((card, index) => {
      return (
        <BackgroundCard
          displayDetail={displayDetail}
          onClick={setDisplayDetail}
          imgSrc={card.imageSrcSmall}
          text={card.shortText[(Math.floor(Math.random() * card.shortText.length))]}
          id={index}
          key={index}
        />
      );
    });

    return listOfCards;
  };

  const renderBackgroundDetail = () => {
    if (displayDetail === '') {
      return;
    } else {
      //pulls the object we are interested in from the background Array of objects
      const infoArray = pullInfo(displayDetail, backGroundInfo);

      return (
        <BackgroundDetail
          onClick={setDisplayDetail}
          setUserPage={setUserPage}
          imgSrc={infoArray.imageSrcLarge}
          text={infoArray.fullText}
        />
      );
    }
  };

  const renderMainPage = () => {
    if (displayDetail === '') {
      return (
        <div className="mt-4 container-fluid">
          <div className="row justify-content-around">
            {renderBackgroundCard(backGroundInfo)}
          </div>
          <div className="row justify-content-around ">
            <button
              onClick={(params) => {
                setUserPage('HintsWeapon');
              }}
              className="col-4 mt-5 btn btn-block btn-primary btn-lg  "
            >
              Hints
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {renderBackgroundDetail()}
      {renderMainPage()}
    </div>
  );
};

export default Background;
