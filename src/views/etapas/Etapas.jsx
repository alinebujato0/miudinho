import React from 'react';
import '../../App.css';

import Header from '../../components/header/Header';

const Etapas = () => {

  return (

    <div id="container">

      <Header />

      <div id="content_etapas">
        <h2>1ª etapa - Escopo</h2>
        <p>O procedimento de iniciação do projeto foi definir o escopo do mesmo, isto é, uma descrição detalhada do trabalho e do produto, mostrando claramente o objetivo a ser atingido ao final da execução.</p>
        <h3>Qual é o nosso escopo?</h3>
        <p><strong>Ataque:</strong> A arma é composta pela união de agulhas, totalizando 20 centímetros de comprimento. O recolhimento após 15 segundos da ativação da arma será feito em 180º.<br />
        <strong>Defesa:</strong> Após 15 segundos a arma será desativada e a defesa do robô será feita através da sua mobilidade e estrutura.<br />
        <strong>Mobilidade:</strong> A mobilidade do robô será feita através de duas rodas traseiras e uma “roda boba” na frente, auxiliando assim na direção do robô devido um bom controle.<br />
        <strong>Estratégia:</strong> A estratégia foi elaborada com a intenção de montar um robô ágil e não apenas forte, pois a arma e a velocidade serão o suficiente para alcançar o objetivo do projeto. O robô possui três sensores, dois na frente e um atrás, para que em qualquer lugar que ele encoste (campo de batalha ou robô adversário) a arma seja acionada para o ataque.<br />
        <strong>Risco:</strong> O risco que o robô corre é em relação às peças, visto que o alto número de batalhas poderá acarretar em desgastes das mesmas.<br />
        <strong>Tempo:</strong> O prazo final da entrega do projeto é setembro.</p>
        <h2>2ª etapa – Aquisição de materiais</h2>
        <p>Os produtos adquiridos para elaboração do produto foram: arduino, motores, shield de motor, shield de bluetooth, sensores, cabo de alimentação, resistores, soquete de pilhas, LED, rodas, barra de pinos (fêmea e macho), jumper e madeira.</p>
        <h2>3ª etapa – Execução</h2>
        <p>Após seguir as etapas detalhadas acima, demos início a execução do nosso produto que constitui basicamente na área de infraestrutura e programação.</p>
        <p>Na parte de infraestrutura ficamos responsáveis pela montagem da base do robô e a estrutura frontal, lateral e traseira garantindo a segurança dos componentes da área interna.</p>
      </div>

    </div>

  );

}

export default Etapas;