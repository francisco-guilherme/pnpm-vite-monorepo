import { Typography } from "components/Typography";
import { useContext } from "react";
import { isKeypress, KeyboardCodes } from "utils/KeyboardUtils";
import { MenuBar } from "..";
import { FocusContext } from "../utils/FocusContext";
import SelectionContext from "../utils/SelectionContext";
import { MenuItemLabel, MenuItemLi, MenuItemLink } from "./MenuItem.styles";
export var MenuItem = function (_a) {
    var id = _a.id, item = _a.item, type = _a.type, onClick = _a.onClick;
    var selectionPath = useContext(SelectionContext);
    // @ts-ignore
    var dispatch = useContext(FocusContext).dispatch;
    var data = item.data;
    var hasSubLevel = data && data.length;
    var isMenu = type === "menu";
    var isSelected = (selectionPath && selectionPath[isMenu ? 1 : 0] === item.id) || false;
    var actionHandler = function (event) {
        if (event.type === "click" ||
            isKeypress(event, KeyboardCodes.Enter) ||
            isKeypress(event, KeyboardCodes.SpaceBar)) {
            if (event.type === "click") {
                event.currentTarget.blur();
            }
            onClick === null || onClick === void 0 ? void 0 : onClick(event, item);
        }
    };
    var handleFocus = function (event) {
        dispatch({ type: "setItemFocused", itemFocused: event.currentTarget });
    };
    var itemProps = {
        onClick: actionHandler,
        onKeyDown: actionHandler,
        tabIndex: 0,
        onFocus: handleFocus,
    };
    var label = (<Typography variant={isSelected ? "label" : "body"}>
      {item.label}
    </Typography>);
    return (<MenuItemLi id={id} key={item.label} selected={!isMenu && isSelected ? "selectedItem" : "notSelectedItem"}>
      {(item === null || item === void 0 ? void 0 : item.href) ? (<MenuItemLink href={item === null || item === void 0 ? void 0 : item.href} target={item === null || item === void 0 ? void 0 : item.target} {...itemProps}>
          {label}
        </MenuItemLink>) : (<MenuItemLabel role="button" {...itemProps} isSelected={isSelected}>
          {label}
        </MenuItemLabel>)}
      {hasSubLevel && <MenuBar data={data} onClick={onClick} type="menu"/>}
    </MenuItemLi>);
};
