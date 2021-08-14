import React,{useState} from 'react';
import Dropdown from './navComponents/Dropdown'
import MenuInfo from '../gameContent/MenuInfo'

const Nav = (props) => {
    const [selectedMenu, setSelectedMenu]= useState('')

    //used to hangle changing the userPage state when user clicks on a menu item
    // this also set shte selectedMenu state that is conatined in Nav
    const setUserPage = (page) => {
        setSelectedMenu(page);
        props.setUserPage(page)
    }

    //this is used to .map through the array that contains all the items we want in our drop down
    const renderDropdowns = MenuInfo.map((element,index)=>{
        return(
           <Dropdown menuInfo={element} setUserPage={setUserPage} userPage={props.userPage} setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        )
    })
    
    // this part returns the background menu tabl hard coded and then the results of the renderDropdowns from up above
    return (
        <div >
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                     <span 
                     className={`nav-link ${selectedMenu==="Background"?"active":""} `} aria-current="page" href="#" 
                     onClick={() => {
                         setUserPage("Background")  
                     }}>  
                        Background
                    </span>
                </li>
                {/* This is used to show all the drop down menus */}
                {renderDropdowns}

                {/* <li ref={ref} className="nav-item dropdown"
                     onClick={() => {
                    setSelectedMenu('Hints')
                   
                }}>
                    <span className={`nav-link ${(
                        selectedMenu==="Hints" ||
                        props.userPage==="HintsWeapon" ||
                        props.userPage==="HintsName" ||
                        props.userPage==="HintsLocation"   
                    )?"active":""} dropdown-toggle`}
                     data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Hints</span>
                    <ul                     
                    className={`dropdown-menu ${selectedMenu==="Hints"?'show':""}`} 
                    >
                        <li><span className="dropdown-item" href="#" onClick={(e) => {
                         e.stopPropagation()
                         setUserPage("HintsWeapon");
                         setSelectedMenu('');
                        }}>Weapon</span></li>
                        <li><span className="dropdown-item" href="#" onClick={(e) => {
                         e.stopPropagation()
                         setUserPage("HintsLocation");
                         setSelectedMenu('');
                     }}>Location </span></li>       
                        <li><span className="dropdown-item" href="#" onClick={(e) => {
                         e.stopPropagation()
                         setSelectedMenu('');
                         setUserPage("HintsName");
                         
                     }}>Perp </span></li>                
                    </ul>
                </li> */}
            </ul>
        </div>
    )

    
}

export default Nav