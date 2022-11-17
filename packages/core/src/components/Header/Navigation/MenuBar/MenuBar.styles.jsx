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
import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
var show = {
    top: "calc(".concat(theme.header.height, "-2px)"),
    transition: ["top"],
    boxShadow: theme.header.shadow,
    transitionDuration: "500ms",
};
export var hide = {
    top: 0,
    transition: ["top"],
    boxShadow: "none",
    transitionDuration: "300ms",
};
export var MenuBarRoot = styled("div")(function (_a) {
    var type = _a.type, hidden = _a.hidden, active = _a.active;
    return (__assign(__assign(__assign(__assign({ left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, (type === "menubar" && {
        position: "relative",
        backgroundColor: theme.colors.atmo1,
    })), (hidden && __assign({}, hide))), (active && __assign({}, show))), (type === "menu" && {
        position: "absolute",
        zIndex: -2,
        backgroundColor: theme.colors.atmo2,
        "& li > div": {
            marginTop: 0,
        },
    })));
});
export var MenuBarUl = styled("ul")({
    margin: 0,
    padding: 0,
    display: "inherit",
    "&:hover .active": __assign({}, hide),
    "& li:hover > .hidden": __assign({}, show),
    // IE fallback code (using focus-within-polyfill)
    "&.focus-within .active": __assign(__assign({}, hide), { zIndex: -2 }),
    "& li.focus-within > .hidden": __assign(__assign({}, show), { zIndex: -1 }),
    "&:focus-within .active": __assign(__assign({}, hide), { zIndex: -2 }),
    "& li:focus-within> .hidden": __assign(__assign({}, show), { zIndex: -1 }),
    // "& li div.focus-visible + div": {
    //   ...show,
    // },
});
