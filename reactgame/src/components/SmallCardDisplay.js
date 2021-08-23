import React from 'react'
import SmallCard from './SmallCard'

const SmallCardDisplay = ({setUserPage, setDetail}) => {
    return(
        <div className="container-fluid" >
                <div className="row justify-content-evenly "> 
                   <div className="col-12 col-md-4 h-centering">
                        <SmallCard Title={"Weapon"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                            setDetail("Weapon")
                        }} />
                   </div> 
                   <div className="col-12 col-md-4  h-centering">
                        <SmallCard Title={"Location"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                            setDetail("Location")
                        }} />
                   </div> 
                   <div className="col-12 col-md-4  h-centering">
                        <SmallCard Title={"Name"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                            setDetail("Name")
                        }} />
                   </div> 
                </div>
                <br></br>
               
            </div>

    )
}   

export default SmallCardDisplay