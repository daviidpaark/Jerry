import { Table, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function SamplePlanDistrictSummary({
  sampleDistricts,
  district,
}) {
  let selectedDistrict = sampleDistricts[0];
  for(let d in sampleDistricts) {
    if(d.districtNumber==district) {
      selectedDistrict = d;
      break;
    } 
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
              {selectedDistrict.opportunityDistrict}
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
              {selectedDistrict.population}
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
              district.demographics.african_americans
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
              district.demographics.hispanics
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
              district.demographics.whites
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
              district.demographics.others
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}