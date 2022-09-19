import { ButtonGroup, IconButton } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function MapControls({
  exit,
  setMap,
  setSelection,
  setState,
  setToggle,
  handleZoomIn,
  handleZoomOut,
  handleReset,
}) {
  function handleExit() {
    setMap(false);
    setState("");
    setSelection("");
    setToggle(false);
    console.log("EXIT");
  }

  var back;
  if (exit) {
    back = (
      <IconButton size="large" onClick={handleExit}>
        <ArrowBackIcon fontSize="inherit"></ArrowBackIcon>
      </IconButton>
    );
  }

  return (
    <ButtonGroup
      style={{
        position: "absolute",
      }}
    >
      {back}
      <IconButton size="large" onClick={handleReset}>
        <RestartAltIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="large" onClick={handleZoomOut}>
        <ZoomOutIcon fontSize="inherit"></ZoomOutIcon>
      </IconButton>
      <IconButton size="large" onClick={handleZoomIn}>
        <ZoomInIcon fontSize="inherit"></ZoomInIcon>
      </IconButton>
    </ButtonGroup>
  );
}
