/**
 * Created by Andy on 8/17/2017.
 */

import {o} from "atp-sugar";

export default (store, actions) => o(actions).map(action => function() {
    store.dispatch(action(...arguments));
}).raw;
