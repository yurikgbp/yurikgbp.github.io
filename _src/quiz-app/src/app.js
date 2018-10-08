import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { store } from './store';
import { reducer } from './reducer';
import { load } from './actions';

import { QuizContainer } from './quiz/container';

export class App {

    constructor() {
        const middleware = [thunk];

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore(
            reducer,
            store,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );

        // this.store.subscribe(() =>
        //     console.log(this.store.getState())
        // );

        this.store.dispatch(load(process.env.PUBLIC_URL + './data.json'));
    }

    init(options = {}) {
        ReactDOM.render(
            <Provider store={this.store}>
                <QuizContainer />
            </Provider>,
            document.getElementById('root')
        );
    }

}
