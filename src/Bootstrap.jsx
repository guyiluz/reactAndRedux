import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

// Require globals
import 'babel-polyfill';
import './scss/style.scss';
import 'lodash';

import configureStore from './store/configureStore';
const store = configureStore();



    
    // Hot Module Replacement API
    if (module.hot) {
        module.hot.accept('./Root', () => {
            const NextApp = require('./Root').default;
            ReactDOM.render(
                <AppContainer>
                    <NextApp store={store}/>
                </AppContainer>,
                document.getElementById('example-app')
            );
        });
    }
    

    
  


















