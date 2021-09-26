import React from 'react'
import SmallCard from './SmallCard'

const SmallCardDisplay = ({detail, setUserPage, setDetail}) => {
    return(
        <div className="container-fluid col-12" >
                <div class="row justify-content-around" >
                    <SmallCard detail={detail} Title={"Weapon"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                       setDetail("Weapon")
                    }} />
                    <SmallCard detail={detail} Title={"Location"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                        setDetail("Location")
                        }} />
                    <SmallCard detail={detail} Title={"Name"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                        setDetail("Name")
                        }} />
                </div>
              
            </div>

    )
}   

export default SmallCardDisplay

   