/**
 * Created by Andy on 8/17/2017.
 */

import React from "react";
import {render} from "react-dom";

import createStore from "./create-store";
import connectActions from "./connect-actions";

export default props =>
    (container, store = null, initialState = {}) => {
        //Get or create store
        const store = store || createStore(props.reducer || {}, initialState);

        //Render message container
        const Content = props.content || <div></div>;
        render(
            <Provider store={store}>
                <Content />
            </Provider>,
            container
        );

        //Create Javascript hooks
        window[namespace] = window[namespace] || {};
        window[namespace][props.name] = connectActions(store, props.actions || {});
    };
