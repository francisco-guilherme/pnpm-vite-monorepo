/// <reference types="react" />
import { NavigationItemProp } from "../Navigation";
export interface MenuBarProps extends BaseProps<"div", {
    onClick: any;
}> {
    data: NavigationItemProp[];
    type: string;
    onClick?: (event: MouseEvent, selection: NavigationItemProp) => void;
}
export declare const MenuBar: {
    ({ id, data, onClick, type, className, }: MenuBarProps): JSX.Element;
    displayName: string;
};
