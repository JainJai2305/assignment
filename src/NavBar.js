import React from 'react' ;
import "./NavBar.css" ;
import {Link} from  'react-router-dom' ;
const NavBar =()=> {
return(    
    <div id="nav" >
        <div> My Reservations App</div>
        <button> Home</button>
        <button> My Reservations </button>
        <button> Reservations Details </button>
        <button> My Profile </button>
    </div>
)   
}
export default NavBar ;
