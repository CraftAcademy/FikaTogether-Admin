import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";

const ParticipantList = () => {
  const { participantList } = useSelector((state) => state);
  const { departments } = useSelector((state) => state);

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

  debugger
  let rows = departments[participantList].participants.map((participant) => {
    return {
      id: participant.id,
      name: participant.name,
      // score: participant.fika_score,
    };
  });

  return (
    <Container maxWidth="sm">
      <div style={{ width: "100%", height: 400 }} data-cy="participant-table">
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

export default ParticipantList;
