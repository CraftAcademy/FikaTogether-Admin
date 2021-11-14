import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Fika } from "../modules/fikas";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

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
      type: "date",
      flex: 0.75,
    },
    {
      field: "participant_1",
      headerName: `${t("participant")} 1`,
      flex: 1,
    },
    {
      field: "participant_2",
      headerName: `${t("participant")} 2`,
      flex: 1,
    },
  ];
  

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <FikaButton />
      <div style={{ height: 400, width: "100%" }} data-cy="fika-table">
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
