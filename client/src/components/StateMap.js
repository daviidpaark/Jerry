import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, useState, useEffect } from "react";
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

const POSTAL = new Map([
	["Georgia", "ga"],
	["Maryland", "md"],
	["Mississippi", "ms"],
]);

const StateMap = ({
	state,
	district,
  random,
	switchMap,
	setMap,
	setDistrict,
	setState,
	setSwitchMap,
}) => {
	let [geo, fetchMap] = useState(null);
	useEffect(() => {
		const request = new Request("/api/maps/" + POSTAL.get(state), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		fetch(request)
			.then((response) => response.json())
			.then((data) => fetchMap(data));
	}, [state]);

	const [position, setPosition] = useState({
		coordinates: xy.get(state),
		zoom: z.get(state),
	});

	function handleZoomIn() {
		if (position.zoom >= 12) return;
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
	}

	return (
		<div data-tip="">
			<MapControls
				exit={1}
        random={random}
				setMap={setMap}
				setDistrict={setDistrict}
				setState={setState}
				switchMap={switchMap}
				setSwitchMap={setSwitchMap}
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
					<Geographies geography={geo}>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Tooltip
									title={
                    <Box>
                      <Typography fontSize={16}>
                        District {geo.properties.DISTRICT}
                      </Typography>
                      <Typography fontsize={10}>
                        Number of reps: {3}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        1: {geo.properties.DISTRICT%2==0 ? "Republican" : "Democratic"}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        2: {geo.properties.DISTRICT%2==0 ? "Republican" : "Democratic"}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        3: {geo.properties.DISTRICT%2==0 ? "Republican" : "Democratic"}
                      </Typography>
                      <Typography fontsize={10}>
                        Total pop: {10000}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        AfricanA. pop: {1000}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        AsianA. pop: {1000}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        Latino pop: {1000}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        White pop: {5000}
                      </Typography>
                      <Typography fontsize={10} paddingLeft={1}>
                        Others pop: {1000}
                      </Typography>
                    </Box>
										
									}
									placement="top"
									arrow
									enterDelay={0}
									leaveDelay={0}
									key={geo.rsmKey}
								>
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onClick={() => {
											if (switchMap && district !== geo.properties.DISTRICT)
												setDistrict(geo.properties.DISTRICT);
										}}
										stroke="#000"
										strokeWidth={0.1}
										style={{
											default: {
												fill:
													district === geo.properties.DISTRICT
														? "#a5d6a7"
														: "#EEEEEE",
												outline: "none",
											},
											hover: {
												fill: "#ce93d8",
												cursor: "pointer",
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

export default memo(StateMap);