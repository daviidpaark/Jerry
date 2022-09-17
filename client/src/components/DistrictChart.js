import { Tooltip, Typography } from "@mui/material";
import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const DistrictChart = ({ state, setSelection }) => {
  const geo = "/maps/" + state + "-districts.json";

  return (
    <div data-tip="">
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "800px" }}
      >
        <ZoomableGroup zoom={1} center={[0, 0]}>
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
