import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonAppBar from "./components/ButtonAppBar";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import DataTable from "./components/SampleData";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/system";

const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
});

function App() {
	const [content, setContent] = useState("");
	return (
		<div>
			<ThemeProvider theme={lightTheme}>
				<Box>
					<CssBaseline />
					<ButtonAppBar />
					<ReactTooltip>{content}</ReactTooltip>
					<Container maxWidth="xl" sx={{ position: "relative", top: "-70px" }}>
						<MapChart setTooltipContent={setContent} />
						<Paper sx={{ padding: 2 }}>
							<Typography
								component="h2"
								variant="h6"
								color="primary"
								gutterBottom
							>
								Sample Data
							</Typography>
							<DataTable></DataTable>
						</Paper>
					</Container>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default App;
