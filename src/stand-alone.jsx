/**
 * Created by Andy on 8/17/2017.
 */

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import createStore from "./create-store";
import connectActions from "./connect-actions";

export default props => {
    //Create module namespace
    window[props.namespace] = window[props.namespace] || {};
    window[props.namespace][props.name] = window[props.namespace][props.name] || {};

    //Create initializer
    window[props.namespace][props.name].init = (container, store = null, initialState = {}) => {
        //Get or create store
        store = store || createStore(props.reducer || {}, initialState);

        //Render message container
        const Content = props.content || (props => <div></div>);
        render(
            <Provider store={store}>
                <Content />
            </Provider>,
            container
        );

        //Create Javascript hooks
        window[props.namespace][props.name] = Object.assign(
            {},
            window[props.namespace][props.name],
            connectActions(store, props.actions || {})
        );
    }
};
