import React from 'react';
import './Components.css'
import Image from 'react-bootstrap/Image'

import logo from '../img/logo.jpg'

function Logo() {   
    return(
       
        <Image src={logo} className="logo" fluid></Image>
        
    )
    
}


export default Logo;