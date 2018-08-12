import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import Loggin from "../src/containers/Loggin/Loggin"

// Require globals
import 'babel-polyfill';
import './scss/style.scss';
import 'lodash';
const token = window.localStorage.getItem("hereoToken")

import configureStore from './store/configureStore';
const store = configureStore();


fetch("../url.json")
.then((resp) => resp.json())
.then((data)=>{
    
localStorage.setItem("hereORootURl",data.url)
})



    ReactDOM.render(
        <AppContainer>
            <Root store={store} />
        </AppContainer>,
        document.getElementById('example-app')
    );
    
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
    

    
  


















