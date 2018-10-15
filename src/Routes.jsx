import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home/Home';
import Projeto from './views/projeto/Projeto'
import Etapas from './views/etapas/Etapas'
import Componentes from './views/componentes/Componentes'
import Robocup from './views/robocup/Robocup'
//import Fotos from './views/fotos/Fotos';

const Routes = () => {

  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projeto" component={Projeto} />
      <Route path="/etapas" component={Etapas} />
      <Route path="/componentes" component={Componentes} />
      <Route path="/robocup" component={Robocup} />
      {/* <Route path="/fotos" component={Fotos} /> */}
      {/* <Route path="/game" component={Game} /> */}
    </Switch>

  )

};

export default Routes;
