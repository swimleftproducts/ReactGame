import React,{useState} from 'react';
import Dropdown from './navComponents/Dropdown'
import BasicTab from './navComponents/BasicTab'
import MenuInfo from '../gameContent/MenuInfo'
import "./Components.css"

const Nav = (props) => {
    const [selectedMenu, setSelectedMenu] = useState('')

    //used to handle changing the userPage state when user clicks on a menu item
    // this also set the selectedMenu state that is contained in Nav
    const setUserPage = (page) => {
        setSelectedMenu(page);
        props.setUserPage(page)
    }

    //this is used to .map through the array that contains all the items we want in our drop down
    const renderDropdowns = MenuInfo.map( (element,index) => {
        return(
           <Dropdown menuInfo = {element} setUserPage = {setUserPage} userPage = {props.userPage} setSelectedMenu = {setSelectedMenu} selectedMenu = {selectedMenu} />
        )
    })
    
    // this part returns the background menu tabl hard coded and then the results of the renderDropdowns from up above
    return (
        <div >
            <nav className = "navbar  ">
            <ul className = "nav nav-tabs ">
                <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Background"} value = {"Background"} />
                {/* This is used to show all the drop down menus */}
                {renderDropdowns}
                <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Finalize"} value = {"Finalize"} />
                <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Results"} value = {"Results"} />
                
            </ul>
            
            <a class = "navbar-brand" href = "http://localhost:3000/">RESET</a>
          </nav>  
        </div>
    )

    
}

export default Nav