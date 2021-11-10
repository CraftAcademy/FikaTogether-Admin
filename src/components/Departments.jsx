import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Department } from "../modules/apiHelpers/departmentHelper";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Departments = () => {
  const { departments } = useSelector((state) => state);

  useEffect(() => {
    Department.index();
  }, []);

  let rows = departments.map((department) => {
    return {
      id: department.id,
      department: department.name,
      score: department.average_score,
    };
  });

  const columns = [
    {
      field: "department",
      headerName: "Departments",
      flex: 1,
      renderCell: (params) => (
        <Link to={`/departments/${params.value}`}>{params.value}</Link>
      ),
    },
    {
      field: "score",
      headerName: "Average Fika Score",
      type: "number",
      flex: 1,
    },
  ];

  return (
    <Container maxWidth="sm">
      <div style={{ width: "100%", height: 400 }} data-cy="department-table">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Container>
  );
};

export default Departments;
