import React,{useState, useRef, useEffect} from 'react';

const Nav = (props) => {
    const [selectedMenu, setSelectedMenu]= useState('')
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
      }, [selectedMenu]); 

    const setUserPage = (page) => {
        setSelectedMenu('');
        props.setUserPage(page)
    }

  
    return (
        <div >
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                     <span className={`nav-link active`} aria-current="page" href="#" 
                     onClick={() => {
                         setUserPage("Background")
                     }}
                     >Background</span>
                </li>
                <li ref={ref} className="nav-item  dropdown" onClick={() => {
                    setSelectedMenu('Hints')
                }}>
                    <span className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Hints</span>
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
                </li>
            </ul>
        </div>
    )

    
}

export default Nav