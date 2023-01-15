import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
let render_entire_tree = (state) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>
    );
}

render_entire_tree(store.getState())
