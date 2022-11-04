import { Tooltip, Typography } from "@mui/material";
import React, { memo, useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import MapControls from "./MapControls";

const MapChart = ({ setState, setSelection, setMap, setToggle }) => {
  var [geo, fetchMap] = useState(null);
  useEffect(() => {
    const request = new Request("/api/maps/us", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch(request)
      .then((response) => response.json())
      .then((data) => fetchMap(data));
  }, []);

  const [position, setPosition] = useState({
    coordinates: [-96.6, 38.7],
    zoom: 1,
  });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
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
      coordinates: [-96.6, 38.7],
      zoom: 1,
    }));
    setMap(false);
    setState("");
    setSelection("");
    setToggle(false);
  }

  return (
    <div data-tip="">
      <MapControls
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
          <Geographies geography={geo}>
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
                        setSelection(geo.properties.name);
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
                        cursor: "pointer",
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
