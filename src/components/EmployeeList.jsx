import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const EmployeeList = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "fikaScore",
      headerName: "Fika Score",
      flex: 1,
    },
  ];

  return (
    <div style={{ width: "100%", height: 400 }} data-cy="employee-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default EmployeeList;
