import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fika } from "../modules/fikas";
import FikaButton from "./FikaButton";
import FikaDateTime from "./FikaDateTime";
import { useMediaQuery } from "react-responsive";

const Events = () => {
  const { t } = useTranslation();
  const { fikas } = useSelector((state) => state);
  const [disabled, setDisabled] = useState(true);
  const [showInputs, setShowInputs] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const width = isTabletOrMobile ? "100%" : "75%";

  useEffect(() => {
    Fika.index();
  }, []);

  let rows = fikas.map((fika) => {
    return {
      date: fika.start_date,
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: width,
          color: "inherit",
          textDecoration: "inherit",
          marginBottom: "2rem",
        }}
      >
        {showInputs ? (
          <>
            <FikaDateTime setDisabled={setDisabled} />
            <FikaButton
              disabled={disabled}
              setShowInputs={setShowInputs}
              showInputs={showInputs}
            />
          </>
        ) : (
          <FikaButton setShowInputs={setShowInputs} showInputs={showInputs} />
        )}
      </div>
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
