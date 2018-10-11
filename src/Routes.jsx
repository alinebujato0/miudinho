import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home/Home';
import Fotos from './views/fotos/Fotos';

const Routes = () => {

  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fotos" component={Fotos} />
    </Switch>

  )

};

export default Routes;
