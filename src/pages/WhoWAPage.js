import React from 'react'
import NaveInside from '../components/NaveInside'
import Logo from '../components/Logo'
import Col from 'react-bootstrap/Col'

function WhoWA() {
    return(
        <div>
            <NaveInside/>
            <Col sm={3} className="m-auto">
                <Logo/>
            </Col>
            <Col sm={4} >
                <h1>Quem Somos</h1>
                <spam></spam>
            </Col>

        </div>
    )

    
}

export default WhoWA;