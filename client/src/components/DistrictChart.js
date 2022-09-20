import { Tooltip, Typography } from "@mui/material";
import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import MapControls from "./MapControls";

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

const DistrictChart = ({
  state,
  selection,
  setMap,
  setSelection,
  setState,
  setToggle,
}) => {
  const geo = "/maps/" + state + "-districts.json";
  const [position, setPosition] = useState({
    coordinates: xy.get(state),
    zoom: z.get(state),
  });

  function handleZoomIn() {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function handleReset() {
    setPosition((position) => ({
      ...position,
      coordinates: xy.get(state),
      zoom: z.get(state),
    }));
    setSelection(state);
  }
  return (
    <div data-tip="">
      <MapControls
        exit={1}
        setMap={setMap}
        setSelection={setSelection}
        setState={setState}
        setToggle={setToggle}
        state={state}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleReset={handleReset}
      ></MapControls>
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "800px" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          {/* <ClickAwayListener onClickAway={() => setSelection(state)}> */}
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
                        fill:
                          selection == geo.properties.CD114FP
                            ? "#f52900"
                            : "#EEEEEE",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        cursor: "pointer",
                        outline: "none",
                      },
                    }}
                    onClick={() => {
                      if (selection == geo.properties.CD114FP) {
                        setSelection(state);
                      } else setSelection(geo.properties.CD114FP);
                    }}
                  />
                </Tooltip>
              ))
            }
          </Geographies>
          {/* </ClickAwayListener> */}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(DistrictChart);
