import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function EnsembleSummary({
  ensembleSMD,
  ensembleMMD,
}) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
          </TableCell>
          <TableCell>
            <Typography>
              SMD
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              MMD
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            Number of Plans: 
          </TableCell>
          <TableCell>
            {numberWithCommas(ensembleSMD.ensembleSummary[0].numberOfPlans)}
          </TableCell>
          <TableCell>
            {numberWithCommas(ensembleMMD.ensembleSummary[0].numberOfPlans)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Opportunity District 
            Representatives per Plan: 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageOpportunityReps.toFixed(2)}
          </TableCell>
          <TableCell>
            {ensembleMMD.ensembleSummary[0].averageOpportunityReps.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Equal Population: 
          </TableCell>
          <TableCell>
          {ensembleSMD.ensembleSummary[0].averageEqualPopulation.toFixed(2)}
          </TableCell>
          <TableCell>
            {ensembleMMD.ensembleSummary[0].averageEqualPopulation.toFixed(2)}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            Average Republican/Democratic Split: 
          </TableCell>
          <TableCell>
            {ensembleSMD.ensembleSummary[0].averageSplit.REPUBLICAN.toFixed(2)}/{ensembleSMD.ensembleSummary[0].averageSplit.DEMOCRAT.toFixed(2)}
          </TableCell>
          <TableCell>
            {ensembleMMD.ensembleSummary[0].averageSplit.REPUBLICAN.toFixed(2)}/{ensembleMMD.ensembleSummary[0].averageSplit.DEMOCRAT.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}