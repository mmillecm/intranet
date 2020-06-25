import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import AreasDoc from './AreasDoc';
import Docs from './Docs'

function ShareDoc(){

    const rh="RH";
    const cont="Contabilidade";
    const ehs="EHS"
    
    
    return(
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column m-5">
                <AreasDoc name={rh}/>
                <AreasDoc name={cont}/>
                <AreasDoc name={ehs}/>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey={rh} className="mt-5">
                <Docs/>
              </Tab.Pane>
              <Tab.Pane eventKey={cont} className="mt-5">
              </Tab.Pane>
              <Tab.Pane eventKey={ehs} className="mt-5">
              Teste
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>   
    )

}

export default ShareDoc