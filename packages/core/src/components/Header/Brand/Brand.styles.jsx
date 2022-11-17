import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
export var BrandRoot = styled("div")({
    display: "flex",
    alignItems: "center",
});
export var BrandSeparator = styled("div")({
    width: 1,
    height: theme.spacing(2),
    margin: theme.spacing(1),
    backgroundColor: theme.colors.acce1,
});
