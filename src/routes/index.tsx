import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingInit from '../pages/LandingInit';

// dentro do Switch é possivel organizar as rotas;
const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LandingInit} />
    </Switch>
);

export default Routes;