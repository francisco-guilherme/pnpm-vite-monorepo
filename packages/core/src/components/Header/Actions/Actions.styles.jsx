import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
export var StyledDiv = styled.div({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    "& > *": {
        marginLeft: theme.spacing(1),
    },
});
