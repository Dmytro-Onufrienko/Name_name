import ReactDOM from "react-dom/client";
import React from "react";
import App from "../App";
import {add_comment, update_post_text} from "./state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let render_entire_tree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                update_post_text={update_post_text}
                add_comment={add_comment}
            />
        </BrowserRouter>
    );
}