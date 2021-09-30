import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { fontColor, fontLink } from "../../../utils/fontColor.context";

export const StyledGridElipsisColumn = styled(Grid.Column)`
  &&&&& {
    i {
      font-size: 20px;
    }
  }
`;

export const StyledGridCheckboxColumn = styled(Grid.Column)`
  &&&&& {
    margin-left: 20px;

    .ui.checkbox label:before {
      border-radius: 50%;
      margin-top: 1px;
    }
    .ui.checkbox input:checked ~ label:after {
      margin-top: 1px;
      background-color: #6fcf97;
      border-radius: 50%;
      color: #ffffff;
    }
  }
`;

export const StyledGridTaskColumn = styled(Grid.Column)<ITaskColumn>`
  &&&&& {
    margin-left: 5px;
    ${fontLink.url};
    ${fontLink.fontFamily};
    color: ${fontColor.taskName};
    cursor: pointer;
    ${(props) =>
      props.isCrashOut ? `color: #9EB7DA; text-decoration: line-through;` : ""}
  }
`;

export type ITaskColumn = {
  isCrashOut?: boolean;
};
