/// <reference types="react" />
import { NavigationItemProp } from "../Navigation";
export interface MenuItemProps extends BaseProps<"div", {
    onClick: any;
}> {
    item: NavigationItemProp;
    type?: string;
    onClick?: (event: MouseEvent, selection: NavigationItemProp) => void;
}
export declare const MenuItem: ({ id, item, type, onClick }: MenuItemProps) => JSX.Element;
