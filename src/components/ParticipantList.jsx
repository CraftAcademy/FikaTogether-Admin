import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const ParticipantList = () => {
  const { participantList, departments } = useSelector((state) => state);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
    },
    {
      field: "score",
      headerName: "Fika Score",
      flex: 1,
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      headerAlign: "center",
    },
  ];

  let rows = departments[participantList.id - 1].participants.map(
    (participant) => {
      return {
        id: participant.id,
        name: participant.name,
        score: participant.fika_score,
      };
    }
  );

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
    <Container maxWidth="sm">
      <div
        style={{ width: "100%", height: 400 }}
        data-cy="participant-table"
        className={classes.root}
      >
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
