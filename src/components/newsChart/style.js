import styled  from "styled-components";

export const ChartWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 20px;
  grid-auto-flow: column;
  justify-items: center;
  align-items: end;
  margin-bottom: 10px;
`;
export const ChartBar = styled.div`
  margin-top: 10px;
  width: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    opacity: 0.8;
  }
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.color[0]},
    ${(props) => props.color[1]}
  );
`;
export const BulletWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-top: 0.5px solid #dde1ed;
  justify-items: center;
  margin-top: 20px;
  gap: 15px;
`;
export const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-top: 10px;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.color[0]},
    ${(props) => props.color[1]}
  );
`;
export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 20px;
  justify-item: center;
  gap: 10px;
`;
export const Info = styled.div`
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  text-transform: capitalize;
  color: #464955;
`;
