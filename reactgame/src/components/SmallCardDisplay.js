import React from 'react'
import SmallCard from './SmallCard'

const SmallCardDisplay = ({detail, setUserPage, setDetail}) => {
    return(
        <div className="container-fluid" >
                <div class="row justify-content-around" >
                    <SmallCard detail={detail} Title={"Weapon"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                        detail===""?setDetail("Weapon"):setDetail("")
                    }} />
                    <SmallCard detail={detail} Title={"Location"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                           detail===""?setDetail("Location"):setDetail("")
                        }} />
                    <SmallCard detail={detail} Title={"Name"} Text={"asdfsafsafasdfasdfas"} onClick={() => {
                           detail===""?setDetail("Name"):setDetail("")
                        }} />
                </div>
              
            </div>

    )
}   

export default SmallCardDisplay

   