import React from 'react';
import '../../App.css';

import Header from '../../components/header/Header';

const Robocup = () => {

  return (

    <div id="container">

      <Header />

      <div id="content">

        <h2>O que é a RoboCup?</h2>
        <p>É a competição mais antiga da FIAP que atinge todos os alunos dos primeiros anos de Sistemas de Informação. Seu principal objetivo é estourar o balão que o robô do adversário carrega. Para isso, todas as máquinas possuem armas variadas em seu corpo. Mas a competição também exige o funcionamento pleno do robô: após estourar o balão do adversário, ele deve recolher sua a arma, só assim é considerado o vencedor do duelo.</p>
        <p>As eliminatórias aconteceram durante o mês de outubro, quando os robôs se enfrentaram na arena montada no campus da FIAP – Aclimação. Durante o Next, os finalistas duelaram pelas primeira, segunda e terceira colocações.</p>
        <p>Os alunos se organizam em grupos para definir desde o projeto inicial do robô, até a parte eletrônica e de programação. Após estar pronto, os robôs vão para a competição que é o momento em que o aluno pode executar tudo que viu de teoria durante o ano, expondo a integração das disciplinas e a importância do trabalho em equipe.</p>
        <h2>Regras</h2>
        <h3>As principais regras da competição são:</h3>
        <p>
          - Os robôs devem ser ligados apenas na arena e devem ter capacidade de ser completamente desativados. <br />
          - Peso máximo 2,5 kg; Altura, largura e comprimento máximo, respectivamente: 20 cm, 30 cm e 30 cm. <br />
          - O balão deve ser preso no centro do robô e a altura de 20cm do chão. <br />
          - Tempo máximo para a arma ficar ativa é de 15 segundos, após isso deverá ser totalmente recolhida dentro do perímetro do robô.
        </p>
        <h2>Informações gerais</h2>
        <p>- Eliminatórias: FIAP Campus Aclimação.</p> <br />
        <p>- 1º, 2º e 3º lugar: NEXT Casa das Caldeiras.</p> <br />
        <p>- A competição ocorre normalmente no mês de outubro.</p>
          
      </div>

    </div>

  );

}

export default Robocup;