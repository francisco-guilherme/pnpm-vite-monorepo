import styled from "@emotion/styled";
import { theme } from "@hitachivantara/uikit-styles";
export var HeaderActions = function (_a) {
    var children = _a.children;
    var Styled = styled("span")({
        marginLeft: "auto",
        display: "inline-flex",
        gap: theme.spacing(2),
    });
    return <Styled>{children}</Styled>;
};
HeaderActions.displayName = "HeaderActions";
