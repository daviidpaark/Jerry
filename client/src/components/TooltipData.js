import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function TooltipData({
  districtNumber,
  districtData
}) {

  return (
    <Box>
      <Typography fontSize={16}>
        District {districtNumber}
      </Typography>
    </Box>
  );
}