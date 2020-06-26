import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';


import NaveInside from '../components/NaveInside';
import Quadro from '../components/Quadro';

import parceria1 from '../img/parceria1.jpg'
import parceira2 from '../img/parceria2.jpg'
import parceria3 from '../img/parceira3.jpg'

function CustomerExperiencePage(params) {
    return(
        <div>
        <NaveInside/>
            
            <CardDeck className="m-5">
                <Quadro Header="Blá Blá Blá" Img={parceria1}
                    Title="Pipipipopo"
                    Text="O empenho em analisar o entendimento das metas propostas assume importantes posições no estabelecimento do orçamento setorial."
                />
                 <Quadro Header="Blá Blá Blá"   Img={parceira2}
                    Title="Pipipipopo"
                    Text="Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a valorização de fatores subjetivos apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados."
                />
                 <Quadro Header="Blá Blá Blá" Img={parceria3}
                    Title="Pipipipopo"
                    Text="O cuidado em identificar pontos críticos no desafiador cenário globalizado faz parte de um processo de gerenciamento das posturas dos órgãos dirigentes com relação às suas atribuições."
                />
            </CardDeck>
        </div>
    )
}

export default CustomerExperiencePage;