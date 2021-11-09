import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Fika } from "../modules/apiHelpers/fikaHelper";

const Events = () => {

  useEffect(() => {
    Fika.index();
    debugger;
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      flex: 0.75,
      editable: true,
    },
    {
      field: "participant_1",
      headerName: "Participant 1",
      flex: 1,
      editable: true,
    },
    {
      field: "participant_2",
      headerName: "Participant 2",
      flex: 1,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      date: "Snow Snow Snow Snow Snow Snow Snow",
      participant_1: "Jon",
      participant_2: 35,
    },
    { id: 2, date: "Lannister", participant_1: "Cersei", participant_2: 42 },
    { id: 3, date: "Lannister", participant_1: "Jaime", participant_2: 45 },
    { id: 4, date: "Stark", participant_1: "Arya", participant_2: 16 },
    {
      id: 5,
      date: "Targaryen",
      participant_1: "Daenerys",
      participant_2: null,
    },
    { id: 6, date: "Melisandre", participant_1: null, participant_2: 150 },
    { id: 7, date: "Clifford", participant_1: "Ferrara", participant_2: 44 },
    { id: 8, date: "Frances", participant_1: "Rossini", participant_2: 36 },
    { id: 9, date: "Roxie", participant_1: "Harvey", participant_2: 65 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} data-cy="fika-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default Events;
