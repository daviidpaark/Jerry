import { Tooltip, Typography } from "@mui/material";
import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const CountyChart = ({ state, setHideMap }) => {
  const geo = "/maps/" + state + ".json";

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
                    <Typography fontSize={20}>{geo.properties.NAME}</Typography>
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
                      setHideMap(false);
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

export default memo(CountyChart);
