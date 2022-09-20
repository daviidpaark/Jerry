import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "sample", headerName: "Sample", width: 130 },
  { field: "comparison", headerName: "Comparison", width: 130 },
];

export default function SampleData4({ state }) {
  const rows = [
    { id: 1, sample: "Sample", comparison: "Comparison" },
    { id: 2, sample: "For", comparison: state },
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
