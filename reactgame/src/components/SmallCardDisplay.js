import React from 'react'
import SmallCard from './SmallCard'

const SmallCardDisplay = ({detail, setUserPage, setDetail}) => {
    return(
        <div className="col-12 order-md-2" >
            <div class="container-fluid flex-j-a" >
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

   