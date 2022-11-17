import { clsx } from "clsx";
import { MenuBar } from "./MenuBar";
import { NavigationNav } from "./Navigation.styles";
import { FocusProvider } from "./utils/FocusContext";
import SelectionContext from "./utils/SelectionContext";
import useSelectionPath from "./utils/useSelectionPath";
export var Navigation = function (_a) {
    var data = _a.data, selected = _a.selected, onClick = _a.onClick, className = _a.className, _b = _a.classes, classes = _b === void 0 ? {} : _b;
    var selectionPath = useSelectionPath(data, selected);
    var handleClick = function (event, selection) {
        onClick === null || onClick === void 0 ? void 0 : onClick(event, selection);
    };
    return (<SelectionContext.Provider value={selectionPath}>
      <FocusProvider>
        <NavigationNav className={clsx(className, classes.root)}>
          <MenuBar data={data} type="menubar" onClick={handleClick}/>
        </NavigationNav>
      </FocusProvider>
    </SelectionContext.Provider>);
};
Navigation.displayName = "Navigation";
