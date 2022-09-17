import { Tooltip, Typography } from "@mui/material";
import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const FIPS = new Map([
  [1, "ALABAMA"],
  [2, "ALASKA"],
  [4, "ARIZONA"],
  [5, "ARKANSAS"],
  [6, "CALIFORNIA"],
  [8, "COLORADO"],
  [9, "CONNECTICUT"],
  [10, "DELAWARE"],
  [11, "DISTRICT OF COLUMBIA"],
  [12, "FLORIDA"],
  [13, "GEORGIA"],
  [15, "HAWAII"],
  [16, "IDAHO"],
  [17, "ILLINOIS"],
  [18, "INDIANA"],
  [19, "IOWA"],
  [20, "KANSAS"],
  [21, "KENTUCKY"],
  [22, "LOUISIANA"],
  [23, "MAINE"],
  [24, "MARYLAND"],
  [25, "MASSACHUSETTS"],
  [26, "MICHIGAN"],
  [27, "MINNESOTA"],
  [28, "MISSISSIPPI"],
  [29, "MISSOURI"],
  [30, "MONTANA"],
  [31, "NEBRASKA"],
  [32, "NEVADA"],
  [33, "NEW HAMPSHIRE"],
  [34, "NEW JERSEY"],
  [35, "NEW MEXICO"],
  [36, "NEW YORK"],
  [37, "NORTH CAROLINA"],
  [38, "NORTH DAKOTA"],
  [39, "OHIO"],
  [40, "OKLAHOMA"],
  [41, "OREGON"],
  [42, "PENNSYLVANIA"],
  [44, "RHODE ISLAND"],
  [45, "SOUTH CAROLINA"],
  [46, "SOUTH DAKOTA"],
  [47, "TENNESSEE"],
  [48, "TEXAS"],
  [49, "UTAH"],
  [50, "VERMONT"],
  [51, "VIRGINIA"],
  [53, "WASHINGTON"],
  [54, "WEST VIRGINIA"],
  [55, "WISCONSIN"],
  [56, "WYOMING"],
]);

const MapChart = ({ setState, setMap }) => {
  return (
    <div data-tip="">
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "800px" }}
      >
        <ZoomableGroup zoom={1} center={[0, 0]}>
          <Geographies geography="/maps/us-albers.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Tooltip
                  title={
                    <Typography fontSize={20}>{geo.properties.name}</Typography>
                  }
                  placement="top"
                  arrow
                  followCursor
                >
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#AAA"
                    strokeWidth={0.5}
                    onClick={() => {
                      if (
                        geo.properties.name === "Maryland" ||
                        geo.properties.name === "Mississippi" ||
                        geo.properties.name === "Georgia"
                      ) {
                        setState(geo.properties.name);
                        setMap(true);
                      }
                    }}
                    style={{
                      default: {
                        fill:
                          geo.properties.name === "Maryland" ||
                          geo.properties.name === "Mississippi" ||
                          geo.properties.name === "Georgia"
                            ? "#90caf9"
                            : "#EEEEEE",
                        outline: "none",
                      },
                      hover: {
                        fill:
                          geo.properties.name === "Maryland" ||
                          geo.properties.name === "Mississippi" ||
                          geo.properties.name === "Georgia"
                            ? "#F53"
                            : "#D6D6DA",
                        outline: "none",
                      },
                      pressed: {
                        fill:
                          geo.properties.name === "Maryland" ||
                          geo.properties.name === "Mississippi" ||
                          geo.properties.name === "Georgia"
                            ? "#E42"
                            : "#D6D6DA",
                        outline: "none",
                      },
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

export default memo(MapChart);
