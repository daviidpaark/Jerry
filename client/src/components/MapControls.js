import { ButtonGroup, Chip, IconButton } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CachedIcon from '@mui/icons-material/Cached';
export default function MapControls({
  exit,
  state,
  random,
  switchMap,
  setMap,
  setDistrict,
  setState,
  setSwitchMap,
  setGraph,
  setOpen,
  handleZoomIn,
  handleZoomOut,
  handleReset,
}) {
  function handleExit() {
    setMap(false);
    setState("");
    setDistrict(-1);
    setSwitchMap(false);
    setGraph(-1);
    setOpen(-1);
  }

  function handleSwitch() {
    setDistrict(-1);
    setSwitchMap(!switchMap);
  }

  let back;
  if (exit) {
    back = (
      <IconButton size="large" onClick={handleExit}>
        <ArrowBackIcon fontSize="inherit"></ArrowBackIcon>
      </IconButton>
    );
  }
  let toggle;
  if(state) {
    toggle = (
      <ButtonGroup>
        <IconButton onClick={handleSwitch} disabled={random>-1 ? false : true}>
          <CachedIcon></CachedIcon>
        </IconButton>
        <Chip label={switchMap ? "Sample Plan" : "Enacted Plan"} sx={{marginTop: "10px"}} />
      </ButtonGroup>
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
      {toggle}
    </ButtonGroup>
  );
}
