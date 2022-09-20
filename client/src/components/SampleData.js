import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "sample", headerName: "Sample", width: 130 },
  { field: "data", headerName: "Data", width: 130 },
];

export default function SampleData({ selection }) {
  const rows = [
    { id: 1, sample: "Sample", data: "Data" },
    { id: 2, sample: "For", data: selection },
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
