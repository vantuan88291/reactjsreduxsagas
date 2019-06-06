import React, {Component} from 'react';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Layout from './Containter/Home/HomeScreen'
import createStore from './Redux';
import rootSaga from './Sagas';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from './routes'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        {this.showContentMenu(routes)}
                    </Switch>
                </Router>
            </Provider>
        );
    }

    showContentMenu = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }

        return result;
    }
}

export default App
