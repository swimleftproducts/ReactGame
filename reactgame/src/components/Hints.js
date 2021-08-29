import React, {useState, useEffect} from 'react';
import SmallCardDisplay from './SmallCardDisplay'
import HintDetail from './HintDetail'

const Hints = (props) => {

    const {story,userPage,setUserPage}=props
    

    const [detail,setDetail] = useState("")



    
    const placeholder = "asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa asdfsafaaaaaaaaaaaaaaaaa aaaaa a aaaaaa aaaaaf a sdfadsf asf asdf as dfasdfasddsa"      

   
    
    return (
        <div className="container justify-content-center" >
            <br></br>
            <br></br>
            <SmallCardDisplay setDetail={setDetail} setUserPage={setUserPage}/>
            
            {detail===""?"":<HintDetail title={detail} content={placeholder} setDetail={setDetail} detail={detail}/>}
             
           
            <div className="text-center" >
                    <div className="">
                    <br></br>
                         <button className="btn btn-primary btn-lg " onClick={() => {setUserPage("SelectWeapon")}}> 
                         Ready to make your selection?
                        </button>
                    </div>   
            </div>
        </div>
        
    )
}

export default Hints

