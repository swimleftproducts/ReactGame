import React from 'react';
import SmallCard from './SmallCard';

const SmallCardDisplay = ({ detail, setUserPage, setDetail }) => {
    return (
        <div className="col-12 p-0 order-1 order-lg-2 order-xl-2 my-3 my-lg-2 my-xl-2" >
            <div class="container-fluid flex-j-a" >
                <SmallCard detail={ detail } Title={ "Weapon" } Text={ "asdfsafsafasdfasdfas" } onClick={ () => {
                    setDetail("Weapon");
                } } />
                <SmallCard detail={ detail } Title={ "Location" } Text={ "asdfsafsafasdfasdfas" } onClick={ () => {
                    setDetail("Location");
                } } />
                <SmallCard detail={ detail } Title={ "Name" } Text={ "asdfsafsafasdfasdfas" } onClick={ () => {
                    setDetail("Name");
                } } />
            </div>
        </div>
    );
};

export default SmallCardDisplay;

