import React,{useState, useRef, useEffect} from 'react';

const Nav = () => {
    const [selectedMenu, setSelectedMenu]= useState('')
    const ref= useRef()

    useEffect(() => {
        const onBodyClick= (event) => {
            console.log(event.target)
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
      }, []); 

    return (
        <div >
            <ul className="nav nav-tabs">
                 <li className="nav-item">
                     <span className="nav-link active" aria-current="page" href="#">Background</span>
                </li>
                <li ref={ref} className="nav-item  dropdown" onClick={() => {
                    setSelectedMenu('Hints')
                }}>
                    <span className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Hints</span>
                    <ul                     
                    className={`dropdown-menu ${selectedMenu==="Hints"?'show':""}`} 
                    >
                        <li><span className="dropdown-item" href="#">Weapon</span></li>
                        <li><span className="dropdown-item" href="#">Location </span></li>       
                        <li><span className="dropdown-item" href="#">Perp </span></li>                
                    </ul>
                </li>
            </ul>
        </div>
    )

    
}

export default Nav