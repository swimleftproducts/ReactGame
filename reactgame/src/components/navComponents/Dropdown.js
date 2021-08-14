import React, {useRef, useEffect} from 'react';

const Dropdown = (
    {menuInfo,setSelectedMenu,setUserPage,userPage, selectedMenu}) => {
    const ref= useRef()
    
    useEffect(() => {
        const onBodyClick= (event) => {
            if(ref.current.contains(event.target)){
               return
            }
            setSelectedMenu('');       
        }

        document.body.addEventListener(
          "click",onBodyClick,{ capture: true, }         
        );

        return() => {
            document.body.removeEventListener('click',onBodyClick,{capture:true,})
        }
      }, [setSelectedMenu]); 

     const renderedDropdowns= menuInfo.Content.map((content) => {
        
        return(
            <li key={content.value}>
                 <span className="dropdown-item" href="#" onClick={(e) => {
                    e.stopPropagation()
                    setUserPage(content.value);
                    setSelectedMenu('');
                }}>
                     {content.label}
                </span>
            </li>
        )
     }) 

    // this is used to get an array that contains all of the values that userPage is set to form a given drop down. This is used to set a given tab as "active"
    const userPagesInDropDown = menuInfo.Content.map((label) => {
      return(label.value)
    })
   
    return(
        <li ref={ref} className="nav-item dropdown"
            onClick={() => {
               setSelectedMenu(menuInfo.Label) 
            }}>
            <span className={`nav-link ${(
                        selectedMenu===menuInfo.Label||
                        userPagesInDropDown.includes(userPage)  
                    )?"active":""} dropdown-toggle`}
                     data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    {menuInfo.Label}
            </span>
            <ul                     
             className={`dropdown-menu ${selectedMenu===menuInfo.Label?'show':""}`}>
                {renderedDropdowns}      
            </ul>
        </li>



    )
}


export default Dropdown