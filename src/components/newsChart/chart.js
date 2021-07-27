import { Data } from "./Data";
import {
  ChartWrapper,
  ChartBar,
  BulletWrapper,
  Bullet,
  InfoWrapper,
  Info,
} from "./style";

export default function Chart() {
  return (
    <>
      <ChartWrapper>
        {Data.map(({ height, color }, i) => {
          return <ChartBar height={height * 1.5} color={color} key={i} />;
        })}
      </ChartWrapper>
      <BulletWrapper>
        {Data.map(({ color }, i) => {
          return <Bullet color={color} key={i} />;
        })}
      </BulletWrapper>
      <InfoWrapper>
        {Data.map(({ name, height }, i) => {
          return (
            <Info key={i}>
              {height} <br /> {name}
            </Info>
          );
        })}
      </InfoWrapper>
    </>
  );
}