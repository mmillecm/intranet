import React from 'react'
import NaveInside from '../components/NaveInside'
import Logo from '../components/Logo'
import Col from 'react-bootstrap/Col'

function WhoWA() {
    return(
        <div>
            <NaveInside/>
            <Col sm={4} className="m-auto">
                <Logo/>
            </Col>
            <Col sm={3} className="m-auto"  >
                <h1 >Quem Somos</h1>
            </Col>
            <Col>
            <spam>A TechProcess nasceu em 2019 com o propósito de colocar nossa experiência a disposição do cliente, descomplicando processos e o uso da TI. 
                            Desenvolvemos soluções em TI inserindo agentes facilitadores  na estrutura ou reestruturação empresarial dos clientes e buscando sua satisfação.
                            No seu curto período de vida a TechProcess vem empenhando a  excelência em qualidade, agilidade, segurança e confiabilidade de seus parceiros e mão-de-obra especializada para execução de soluções
                </spam>
            </Col>

        </div>
    )

    
}

export default WhoWA;