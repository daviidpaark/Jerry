import * as React from "react";
import { Popover } from "@mui/material";

export default function SampleData3() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div style={{ height: "690px", width: "100%" }}>
      <img
        src="/data/box.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        onClick={handleClick}
      ></img>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <img
          src="/data/box.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
          onClick={handleClose}
        ></img>
      </Popover>
    </div>
  );
}
