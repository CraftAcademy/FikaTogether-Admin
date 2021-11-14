import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Department } from "../modules/departments";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Departments = () => {
  const { departments } = useSelector((state) => state);
  const { t } = useTranslation();
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
      headerName: t("departments"),
      flex: 1,
      renderCell: (params) => (
        <Link to={`/departments/${params.value}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >{params.value}</Link>
      ),
    },
    {
      field: "score",
      headerName: t("fikaScore"),
      type: "number",
      flex: 0.5,
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
