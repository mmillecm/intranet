import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Quadro from '../components/Quadro';
import Quadro1 from '../img/quadro-aviso.jpg'
import corona from '../img/coronavirus.jpg'
import Quadro3 from '../img/quadro-aviso3.jpg'
import NaveInside from '../components/NaveInside';
import Hero from '../components/Hero';



function HomePage(props){

    return(
        <div>
            <NaveInside/>

            <Hero/>

            <CardDeck className="m-5">
                <Quadro Header="COVID 19" Img={corona} 
                Title="Fiquem em casa"
                Text="A TechProcess como uma consultoria de empresarial sabe que o maior recurso que temos são nossos funcionarios, por isso estabelecemos home-office para todos os funcionarios e estamos trabalhando para melhor atender e orientar nosso cliente.Contamos com sua colaboração, fiquem em casa " />
                <Quadro Header="Aviso Geral" Img={Quadro1}
                    Title="Reunião Geral no Teams "
                    Text="Como enviado no email do dia 03/05/2020 as reuniões semanais vão ser feitas no Teams e contamos com a presença de todos. O acesso será feito no canal Geral com horario a partir das 9h."
                />   
                <Quadro Header="Auditoria" Img={Quadro3}
                    Title="Lembrete Auditoria"
                    Text="Mesmo em pandemia estamos em processo de auditoria deixem seus arquivos organizados, sigam os 5s e a ISO 9001 na cabeça, contamos com você nesse processo "
                />             
            </CardDeck>        
      
        </div>

    )
}

export default HomePage;