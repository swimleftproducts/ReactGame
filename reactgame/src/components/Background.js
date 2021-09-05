import React, {useState} from 'react';
import BackgroundCard from  './BackgroundCard'
import BackgroundDetail from './BackgroundDetail';


const backgroundInfo = [
     {imgSrc:"./assets/2/nazgul.jpeg",
      text:"Porem ipsum dolor sit amet, consectetur adipiscing elit. Quacumque enim ingredimur, in aliqua historia vestigium ponimus.",
      teaser:"Porem ipsum dolor sit amet...",
      id:"Background1"
     },
     {imgSrc:"./assets/2/glamdring.jpeg",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quacumque enim ingredimur, in aliqua historia vestigium ponimus.",
      teaser:"Porem ipsum dolor sit amet...",
      id: "Background2"
     },
     {imgSrc:"./assets/2/hobbiton.jpeg",
      text:"Horem ipsum dolor sit amet, consectetur adipiscing elit. Quacumque enim ingredimur, in aliqua historia vestigium ponimus.",
      teaser:"Porem ipsum dolor sit amet...",
      id:"Background3"
     }
 ]



const Background = (props) => {
     const [displayDetail,setDisplayDetail] = useState("")

    const renderBackgroundCard=(backgroundInfo)=>{
          const listOfCards = backgroundInfo.map((card) => {
              return (
                  <BackgroundCard displayDetail={displayDetail} onClick={setDisplayDetail} title={card.id} imgSrc={card.imgSrc} text={card.teaser} id={card.id}  key={card.id}/>
              )
          });
  
          return listOfCards
      }
     
      const renderBackgroundDetail=() => {
           if(displayDetail===""){
                return 
           }else{
               const infoArray = pullInfo(displayDetail,backgroundInfo)
               return <BackgroundDetail onClick={setDisplayDetail} title={infoArray.id} setUserPage={props.setUserPage} imgSrc={infoArray.imgSrc} text={infoArray.text} />
           }
      }

      // this is used to pull a single array out of the main info array for
      // the background section of the game
      const pullInfo = (displayDetail,array) => {
          for (var i=0; i < array.length; i++) {
               if (array[i].id === displayDetail) {
                    //this is the array that the user wanted displayed in detail
                   return array[i];
               }
           }
      }

      const renderMainPage =()=>{
           if(displayDetail===""){
                return(
                    <div class="mt-4 container-fluid">
                    <div class="row justify-content-around" >
                        {renderBackgroundCard(backgroundInfo)}
                    </div>
                    <div class="row justify-content-around ">
                         <button onClick={(params) => {
                           props.setUserPage('HintsWeapon')   
                         }} class="col-4 mt-5 btn btn-block btn-primary btn-lg  ">Hints</button>
                        
                    </div>
               </div>
                  
                )
           }
      }

     return(
          <div>
               {renderBackgroundDetail()}
               {renderMainPage()}
          </div>
     )
   
}




export default Background;