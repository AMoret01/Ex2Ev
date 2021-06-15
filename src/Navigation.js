import * as React from 'react';

import App from './App';
import EXSecondView from './SecondView/EXSecondView';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Redirect 
                        from="/" 
                        to="/"
                    />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={App}
                        />
                        <Route
                            exact
                            path="/EXSecondview"
                            component={EXSecondView}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navigation;
