import { Typography as HvTypography } from "../../Typography";
import { BrandRoot, BrandSeparator } from "./Brand.styles";
/**
 * Header component is used to render a header bar with logo and brand name, navigation and actions.
 */
export var Brand = function (_a) {
    var logo = _a.logo, name = _a.name, className = _a.className;
    return (<BrandRoot className={className}>
      {logo}
      {logo && name && <BrandSeparator />}
      {name && <HvTypography variant="label">{name}</HvTypography>}
    </BrandRoot>);
};
