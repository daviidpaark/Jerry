import { Tooltip } from "@mui/material";
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
	switchMap,
	setMap,
	setDistrict,
	setState,
	setSwitchMap,
	setGraph,
	setEnsembleSMD,
	setEnsembleMMD,
	setOpen,
	setEnactedPercentage,
	samplePlanMap,
	setSamplePlanMap,
	setSamplePlan,
}) => {
	const [geo, fetchMap] = useState(null);
	const [districts, setDistricts] = useState(null);
	useEffect(() => {
		fetchStateMap();
		fetchEnsembleSMD();
		fetchEnsembleMMD();
		fetchPercentages();
	}, [state]);

	async function fetchStateMap() {
    const request = new Request("/api/maps/" + POSTAL.get(state), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request)
			.then((response) => response.json())
			.then((data) => fetchMap(data));
  }

	async function fetchEnsembleSMD() {
    const request = new Request("/api/data/ensemble?mmd=false", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request, {importance: "low"})
			.then((response) => response.json())
			.then((data) => setEnsembleSMD(data));
  }

	async function fetchEnsembleMMD() {
    const request = new Request("/api/data/ensemble?mmd=true", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request, {importance: "low"})
			.then((response) => response.json())
			.then((data) => setEnsembleMMD(data));
  }

	async function fetchPercentages() {
    const request = new Request("/api/data/plan/percents", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		await fetch(request, {importance: "low"})
			.then((response) => response.json())
			.then((data) => setEnactedPercentage(data));
  }

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
				setMap={setMap}
				setDistrict={setDistrict}
				setState={setState}
				switchMap={switchMap}
				setSwitchMap={setSwitchMap}
				setGraph={setGraph}
				setOpen={setOpen}
				state={state}
				samplePlanMap={samplePlanMap}
				setSamplePlan={setSamplePlan}
				setSamplePlanMap={setSamplePlanMap}
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
				>
					{switchMap? (
						<Geographies geography={samplePlanMap}>
							{({ geographies }) =>
								geographies.map((samplePlanMap) => (
									<Tooltip
										title={ 
											"District " + samplePlanMap.properties.districtNumber
										}
										placement="top"
										arrow
										enterDelay={0}
										leaveDelay={0}
										key={samplePlanMap.rsmKey}
									>
										<Geography
											key={samplePlanMap.rsmKey}
											geography={samplePlanMap}
											onClick={() => {
												if (switchMap && district !== samplePlanMap.properties.districtNumber)
													setDistrict(samplePlanMap.properties.districtNumber);
											}}
											stroke="#000"
											strokeWidth={0.1}
											style={{
												default: {
													fill:
														district === samplePlanMap.properties.districtNumber
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
					):(
						<Geographies geography={geo}>
							{({ geographies }) =>
								geographies.map((geo) => (
									<Tooltip
										title={ 
											"District " + geo.properties.districtNumber
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
												if (switchMap && district !== geo.properties.districtNumber)
													setDistrict(geo.properties.districtNumber);
											}}
											stroke="#000"
											strokeWidth={0.1}
											style={{
												default: {
													fill:
														district === geo.properties.districtNumber
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
					)}
				</ZoomableGroup>
			</ComposableMap>
		</div>
	);
};

export default memo(StateMap);
