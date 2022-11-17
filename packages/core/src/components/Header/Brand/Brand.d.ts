/// <reference types="react" />
export interface BrandProps extends BaseProps {
    logo?: React.ReactNode;
    name?: string;
}
/**
 * Header component is used to render a header bar with logo and brand name, navigation and actions.
 */
export declare const Brand: ({ logo, name, className }: BrandProps) => JSX.Element;
