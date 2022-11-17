import clsx from "clsx";
import { useContext } from "react";
import { MenuItem } from "../MenuItem";
import SelectionContext from "../utils/SelectionContext";
import { MenuBarRoot, MenuBarUl } from "./MenuBar.styles";
export var MenuBar = function (_a) {
    var id = _a.id, _b = _a.data, data = _b === void 0 ? [] : _b, onClick = _a.onClick, _c = _a.type, type = _c === void 0 ? "menubar" : _c, className = _a.className;
    var selectionPath = useContext(SelectionContext);
    var isMenu = type === "menu";
    var isActive = isMenu && data.filter(function (item) { return item.id === (selectionPath === null || selectionPath === void 0 ? void 0 : selectionPath[1]); }).length > 0;
    return (<MenuBarRoot className={clsx(className, isMenu && "hidden", isActive && "active")} type={type} hidden={isMenu} active={isActive}>
      <MenuBarUl id={id} onFocus={function () { }}>
        {data.map(function (item) { return (<MenuItem key={item.id} item={item} type={type} onClick={onClick}/>); })}
      </MenuBarUl>
    </MenuBarRoot>);
};
MenuBar.displayName = "MenuBar";
