import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full Name", width: 200 },
  { field: "party", headerName: "Affiliation", width: 100 },
  { field: "first", headerName: "Ranked 1st", width: 100 },
  { field: "second", headerName: "Ranked 2nd", width: 100 },
  { field: "third", headerName: "Ranked 3rd", width: 100 },
  { field: "fourth", headerName: "Ranked 4th", width: 100 },
  { field: "fifth", headerName: "Ranked 5th", width: 100 },
];

export default function SampleData({ District }) {
  const rows = [
    { id: 1, name: "SMD Candidate", party: "Republican", first: "12345", second: "-", third: "-", fourth: "-", fifth: "-"},
    { id: 2, name: "MMD Candidate", party: "Democratic", first: "111", second: "222", third: "333", fourth: "444", fifth: "555"},
  ];
  return (
    <div style={{ height: "690px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
