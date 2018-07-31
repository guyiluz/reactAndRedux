import PropTypes from 'prop-types';
import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


export default function Root ({
    store
}) {
    return (
        
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}


Root.propTypes = {
    store: PropTypes.object
};
