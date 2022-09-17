import { Tooltip, Typography } from "@mui/material";
import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const xy = new Map([
  ["Maryland", [-77.35486519706453, 39.056005538826696]],
  ["Mississippi", [-89.88180841231264, 32.67701591286358]],
  ["Georgia", [-83.17549980649974, 32.79853181919429]],
]);

const z = new Map([
  ["Maryland", 8],
  ["Mississippi", 7],
  ["Georgia", 8],
]);

const DistrictChart = ({ state, setSelection }) => {
  const geo = "/maps/" + state + "-districts.json";

  return (
    <div data-tip="">
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "800px" }}
      >
        <ZoomableGroup zoom={z.get(state)} center={xy.get(state)}>
          <Geographies geography={geo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Tooltip
                  title={
                    <Typography fontSize={20}>
                      {geo.properties.CD114FP}
                    </Typography>
                  }
                  placement="top"
                  arrow
                  followCursor
                >
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#AAA"
                    strokeWidth={0.1}
                    style={{
                      default: {
                        fill: "#EEEEEE",
                        outline: "none",
                      },
                      hover: { fill: "#F53" },
                    }}
                    onClick={() => {
                      setSelection(geo.properties.CD114FP);
                    }}
                  />
                </Tooltip>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(DistrictChart);
