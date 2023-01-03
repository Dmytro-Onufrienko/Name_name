import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
let render_entire_tree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                getCurrentUser={store.getCurrentUser.bind(store)}
            />
        </BrowserRouter>
    );
}

render_entire_tree(store.getState())

store.subscriber(render_entire_tree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
