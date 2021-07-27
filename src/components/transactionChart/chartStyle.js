import styled, { css } from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%
    height:100%
`;
export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Chart = css`
  margin-top: 10px;
  width: 4px;
  &:hover {
    opacity: 0.8;
  }
`;
export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background: #3ec4ff;
  ${Chart};
`;