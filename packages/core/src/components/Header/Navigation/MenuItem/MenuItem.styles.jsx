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
import { theme, themeVariant } from "@hitachivantara/uikit-styles";
import { outlineStyles } from "components/Focus/Focus.Styles";
var hoverColor = theme.colors.atmo3;
export var MenuItemLi = styled("li")({
    display: "inline",
    "&:hover": {
        "& > [role='button']": {
            backgroundColor: hoverColor,
        },
        "&:focus-within": {
            "& > [role='button']": {
                backgroundColor: hoverColor,
            },
        },
    },
    // IE fallback code (using focus-within-polyfill)
    "&.focus-within": {
        "& > [role='button']": {
            backgroundColor: hoverColor,
        },
    },
}, themeVariant({
    prop: "selected",
    variants: {
        selectedItem: {
            borderTop: "2px solid ".concat(theme.colors.acce3),
            paddingTop: "2px",
            "& > div > p": {
                color: theme.colors.acce3,
            },
        },
        notSelectedItem: {
            marginTop: "4px",
        },
    },
}));
export var MenuItemLabel = styled("div")({
    border: "none",
    cursor: "pointer",
    padding: "".concat(theme.spacing(1), " ").concat(theme.spacing(2)),
    "&:active": {
        outline: "none",
    },
    "&:focus": {
        outline: "none",
        backgroundColor: hoverColor,
    },
    "&.focus-visible": __assign({}, outlineStyles),
}, themeVariant({
    prop: "isSelected",
    variants: {
        true: {
            "& p": { color: theme.colors.acce3 },
        },
    },
}));
export var MenuItemLink = styled("a")({
    border: "none",
    cursor: "pointer",
    padding: "".concat(theme.spacing(1), " ").concat(theme.spacing(2)),
    display: "block",
    textDecoration: "none",
    "&:active": {
        outline: "none",
    },
    "&:focus": {
        outline: "none",
        backgroundColor: hoverColor,
    },
    "&.focus-visible": __assign({}, outlineStyles),
});
