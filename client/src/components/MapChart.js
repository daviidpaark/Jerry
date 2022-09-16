import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MapChart = ({ setTooltipContent }) => {
	return (
		<div data-tip="">
			<ComposableMap
				projection="geoAlbers"
				style={{ width: "100%", height: "100%" }}
			>
				<Geographies geography="/maps/us-albers.json">
					{({ geographies, projection, path }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								stroke="#FFF"
								onClick={() => {
									// Implement page transition
								}}
								onMouseEnter={() => {
									if (
										geo.properties.name === "Maryland" ||
										geo.properties.name === "Mississippi" ||
										geo.properties.name === "Georgia"
									)
										setTooltipContent(`${geo.properties.name}`);
								}}
								onMouseLeave={() => {
									setTooltipContent("");
								}}
								style={{
									default: {
										fill:
											geo.properties.name === "Maryland" ||
											geo.properties.name === "Mississippi" ||
											geo.properties.name === "Georgia"
												? "#1976d2"
												: "#D6D6DA",
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
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default memo(MapChart);
