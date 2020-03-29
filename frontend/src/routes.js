import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/profile" component={Profile}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default routes;