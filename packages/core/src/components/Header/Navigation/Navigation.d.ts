/// <reference types="react" />
export interface NavigationItemProp {
    id: string;
    label: string;
    path?: string;
    href?: string;
    target?: string;
    data?: NavigationItemProp[];
}
export interface NavigationProps extends BaseProps<"div", {
    onClick: any;
}> {
    data: NavigationItemProp[];
    selected?: string;
    onClick?: (event: MouseEvent, selection: NavigationItemProp) => void;
    classes?: {
        root?: string;
    };
}
export declare const Navigation: {
    ({ data, selected, onClick, className, classes, }: NavigationProps): JSX.Element;
    displayName: string;
};
