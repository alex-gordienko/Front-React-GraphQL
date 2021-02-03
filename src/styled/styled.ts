import originalStyled, { CreateStyled } from "@emotion/styled";
import { ITheme } from "./variables";

const styled = originalStyled as CreateStyled<ITheme>;

export default styled;