var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import PropTypes from "prop-types";
import { createContext, useMemo, useReducer } from "react";
var reducer = function (state, action) {
    switch (action.type) {
        case "setItemFocused":
            return { itemFocused: action.itemFocused };
        default:
            return state;
    }
};
var initialState = { itemFocused: null };
var FocusContext = createContext(initialState);
var FocusProvider = function (props) {
    var _a = useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var contextValue = useMemo(function () { return (__assign(__assign({}, state), { dispatch: dispatch })); }, [state, dispatch]);
    var children = props.children;
    return (<FocusContext.Provider value={contextValue}>
      {children}
    </FocusContext.Provider>);
};
FocusProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { FocusContext, FocusProvider };
