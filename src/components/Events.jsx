import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Fika } from "../modules/fikas";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

import FikaButton from "./FikaButton";
const Events = () => {
  const { t } = useTranslation();
  const { fikas } = useSelector((state) => state);

  useEffect(() => {
    Fika.index();
  }, []);

  let rows = fikas.map((fika) => {
    return {
      date: new Date(Date.parse(fika.start_date)).toLocaleString(),
      id: fika.id,
      participant_1: fika.participants[0].name,
      participant_2: fika.participants[1].name,
    };
  });

  const columns = [
    {
      field: "date",
      headerName: t("date"),
      type: "dateTime",
      flex: 0.75,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "participant_1",
      headerName: `${t("participant")} 1`,
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      cellClassName: "super-app-theme--cell",
    },
    {
      field: "participant_2",
      headerName: `${t("participant")} 2`,
      flex: 1,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      cellClassName: "super-app-theme--cell",
    },
  ];

  const useStyles = makeStyles({
    root: {
      "& .super-app-theme--header": {
        backgroundColor: "rgba(0,0,0,.85)",
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
      "& .super-app-theme--cell": {
        fontWeight: "600",
        textAlign: "center",
      },
    },
  });

  const classes = useStyles();

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <FikaButton />
      <div
        style={{ height: 400, width: "100%" }}
        data-cy="fika-table"
        className={classes.root}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );
};

export default Events;
