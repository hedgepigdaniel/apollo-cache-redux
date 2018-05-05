"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
var constants_1 = require("./constants");
var initialState = {};
function apolloReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case constants_1.APOLLO_RESET:
            return initialState;
        case constants_1.APOLLO_OVERWRITE:
            return action.data;
        case constants_1.APOLLO_WRITE:
            return merge_1.merge(state, action.data);
        default:
            return state;
    }
}
exports.apolloReducer = apolloReducer;
//# sourceMappingURL=reducer.js.map