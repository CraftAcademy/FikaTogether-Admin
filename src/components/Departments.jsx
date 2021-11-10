import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Department } from "../modules/apiHelpers/fikaHelper";

const Departments = () => {
  const { departments } = useSelector((state) => state);

  useEffect(() => {
    Department.index();
    debugger
  }, []);

  let rows = departments.map((department) => {
    return {
      id: department.id,
      name: department.name,
      score: department.score,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "departments",
      headerName: "Departments",
      flex: 1,
    },
    {
      field: "scores",
      headerName: "Average Fika Score",
      type: "number",
      flex: 1,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} data-cy="department-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Departments;
