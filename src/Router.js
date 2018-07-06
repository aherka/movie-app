import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import MovieLayout from './containers/MovieLayout';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/movies/:id' component={MovieLayout}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;