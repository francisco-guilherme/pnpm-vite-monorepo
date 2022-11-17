/// <reference types="react" />
import PropTypes from "prop-types";
declare const FocusContext: import("react").Context<{
    itemFocused: null;
}>;
declare const FocusProvider: {
    (props: any): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export { FocusContext, FocusProvider };
