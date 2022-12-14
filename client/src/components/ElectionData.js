import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function ElectionData({
  samplePlan,
  district
}) {
  let selectedDistrict = samplePlan.districts[0];
  for(let d in samplePlan.districts) {
    if(samplePlan.districts[d].districtNumber==district) {
      selectedDistrict = samplePlan.districts[d];
      break;
    } 
  }
  let winner = selectedDistrict.WINNER;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Box>
      <Typography paddingLeft={2} paddingTop={1}>
        District {district}
      </Typography>
      <hr></hr>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Candidates
            </TableCell>
            <TableCell>
              Party Affiliation
            </TableCell>
            <TableCell>
              Votes
            </TableCell>
            <TableCell>
              Incumbent
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {selectedDistrict.candidateRepublican}
            </TableCell>
            <TableCell>
              Republican
            </TableCell>
            <TableCell>
              {numberWithCommas(selectedDistrict.REPUBLICAN)}
            </TableCell>
            <TableCell>
              {selectedDistrict.incumbentRepublican}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {selectedDistrict.candidateDemocrat}
            </TableCell>
            <TableCell>
              Democrat
            </TableCell>
            <TableCell>
              {numberWithCommas(selectedDistrict.DEMOCRAT)}
            </TableCell>
            <TableCell>
              {selectedDistrict.incumbentDemocrat}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br></br>
      <Typography paddingLeft={2}>
        Winner: {selectedDistrict["candidate"+winner]}
      </Typography>
    </Box>
  );
}