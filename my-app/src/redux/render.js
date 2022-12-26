import ReactDOM from "react-dom/client";
import React from "react";
import App from "../App";
import {add_comment} from "./state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let render_entire_tree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                users={state.users}
                discussion_theme={state.discussion_theme}
                comments_data={state.comments_data}
                add_comment={add_comment}
            />
        </BrowserRouter>
    );
}