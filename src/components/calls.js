import * as Icon from "react-bootstrap-icons";
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
} from "react-vis";

function calls() {
  return (
    <div className="calls box">
      <div className="callsTitle">
        <div className="line"></div>
        <p className="title">Phone Calls</p>
        <a href="./">
          <Icon.ThreeDots />
        </a>
      </div>
      <div className="callsChart">
        <XYPlot width={300} height={350}>
          <AreaSeries
            className="area-series-example"
            curve="curveNatural"
            data={[
              { x: 1, y: 10 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
              
            ]}
          />
        </XYPlot>
      </div>
    </div>
  );
}

export default calls;
