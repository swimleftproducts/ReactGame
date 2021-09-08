import React,{useState} from 'react';
import Dropdown from './navComponents/Dropdown'
import BasicTab from './navComponents/BasicTab'
import MenuInfo from '../gameContent/MenuInfo'


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
    
    // this part returns the background menu tab hard coded and then the results of the renderDropdowns from up above
    return (
        <div style={{"position":"relative","z-index":"5000"}}>
            <nav className = "navbar  navbar-dark nav-pills bg-dark navbar-expand-md" style={{"z-index":"1000"}}>
                <span class="navbar-brand mx-4">{props.userPage}</span>

                <button class="navbar-toggler mx-2 ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className = "navbar-nav ms-auto mb-2 mb-lg-0">
                    <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Background"} value = {"Background"} />
                    {/* This is used to show all the drop down menus */}
                    {renderDropdowns}
                    <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Finalize"} value = {"Finalize"} />
                    <BasicTab selectedMenu = {selectedMenu} setUserPage = {setUserPage} label = {"Results"} value = {"Results"} />
                    <li className="nav-item ms-auto"><button className="btn btn-outline-danger" ><a href = "/">Reset</a></button></li>
                </ul>
                </div>
          </nav>  
        </div>
    )

    
}

export default Nav

