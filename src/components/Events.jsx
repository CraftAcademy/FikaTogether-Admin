import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Fika } from "../modules/apiHelpers/fikaHelper";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

import FikaButton from "./FikaButton";

const Events = () => {
  const { fikas } = useSelector((state) => state);

  useEffect(() => {
    Fika.index();
  }, []);

  let rows = fikas.map((fika) => {
    return {
      id: fika.id,
      date: fika.start_date,
      participant_1: fika.participants[0].name,
      participant_2: fika.participants[1].name,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      flex: 0.75,
    },
    {
      field: "participant_1",
      headerName: "Participant 1",
      flex: 1,
    },
    {
      field: "participant_2",
      headerName: "Participant 2",
      flex: 1,
    },
  ];

  return (
    <Container sx={{textAlign:"center"}}>
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
