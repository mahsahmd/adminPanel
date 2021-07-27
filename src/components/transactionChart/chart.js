import {Data} from './data';
import { BarChartContainer, MakeBar } from "./chartStyle";

export default function chart() {
  return (
    <>
        {Data.map(({ height }, i) => {
          return (
            <BarChartContainer key={i}>
              <MakeBar height={height * 2}/>
            </BarChartContainer>
          );
        })}
    </>
  );
}