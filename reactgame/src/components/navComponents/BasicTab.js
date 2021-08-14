import React from 'react';

const BasicTab = ({setUserPage, selectedMenu, label,value}) => {
    
    return(
        <li className="nav-item">
            <span 
             className={`nav-link ${selectedMenu===value?"active":""} `} aria-current="page" href="#" 
             onClick={() => {
               setUserPage(value)  
             }}>  
                {label}
            </span>
        </li>
    )
}


export default BasicTab
