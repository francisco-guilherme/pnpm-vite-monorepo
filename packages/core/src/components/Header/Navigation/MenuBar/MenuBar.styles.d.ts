/// <reference types="react" />
export interface MenuBarRootProps {
    type: string;
    hidden?: boolean;
    active?: boolean;
}
export declare const hide: {
    top: number;
    transition: string[];
    boxShadow: string;
    transitionDuration: string;
};
export declare const MenuBarRoot: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & MenuBarRootProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const MenuBarUl: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
