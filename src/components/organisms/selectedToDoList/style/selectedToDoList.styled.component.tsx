import { Grid } from "semantic-ui-react";
import styled from "styled-components";

export const StyledGridFirstColumn = styled(Grid.Column)`
  &&&&& {
    i {
      color: #2f80ed;
      font-size: 25px;
      margin-top: 10px;
      position: relative;
      top: 4px;
      cursor: pointer;
    }
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
