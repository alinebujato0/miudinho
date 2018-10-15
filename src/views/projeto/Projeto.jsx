import React from 'react';
import '../../App.css';

import Header from '../../components/header/Header';

const Projeto = () => {

  return (

    <div id="container">

      <Header />

      <div id="content">
        <p>O projeto constitui-se da implantação de um robô que visa ser competitivo e ao mesmo tempo defensivo para competir na Robo Cup. O intuito da competição é manter a bexiga do seu robô intacta, sendo o vencedor aquele que conseguir estourar a bexiga do adversário.</p> <br />
        <p>O objetivo do projeto é criar um produto que possua um ataque capaz de derrotar o adversário e ao mesmo tempo conciliar mobilidade e estrutura que auxilie na defesa da sua própria bexiga.</p> <br />
        <p>A estratégia foi elaborada com a intenção de montar um robô ágil e não apenas forte, pois a arma e a velocidade serão o suficiente para alcançar o objetivo do projeto.</p>
      </div>

    </div>

  );

}

export default Projeto;