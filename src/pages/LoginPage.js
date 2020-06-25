import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Nave from '../components/Nave'
import Logo from '../components/Logo'
import Formlogin from '../components/Formlogin'


function Login(props) {
   
    return(
        <div>
            <Nave/>
            <Row>
                <Col className=" d-flex align-items-center ml-5 ml-lg-5">
                    <Logo />
                </Col>
                <Col  className="align-self-center mr-5">
                    <Formlogin/>
                </Col>

            </Row>    
        </div>
        
        
        )
        
    


}




export default Login;