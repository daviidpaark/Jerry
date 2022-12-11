import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function SamplePlanDistrictSummary({
  sampleDistricts,
  district,
  }) {
  let selectedDistrict = sampleDistricts[0];
  for(let d in sampleDistricts) {
    if(sampleDistricts[d].districtNumber==district) {
      selectedDistrict = sampleDistricts[d];
      break;
    } 
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography>
              District Number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {selectedDistrict.districtNumber}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              Opportunity District
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {selectedDistrict.opportunityDistrict?"Yes":"No"}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              Total Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {numberWithCommas(selectedDistrict.population)}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              African American Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {numberWithCommas(selectedDistrict.BLACK)}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              Hispanic Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {numberWithCommas(selectedDistrict.HISPANIC)}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              White Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {numberWithCommas(selectedDistrict.WHITE)}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>
              Other Population
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              {numberWithCommas(selectedDistrict.OTHER)}
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}