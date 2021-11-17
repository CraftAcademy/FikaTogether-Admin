import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { LoadingButton } from "@mui/lab";
import AddParticipantModal from "./AddParticipantModal";

const ParticipantList = () => {
  const { participantList, departments } = useSelector((state) => state);
  const [open, setOpen] = useState(false);

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

  let rows = departments
    .find((department) => department.id === participantList.id)
    .participants.map((participant) => {
      return {
        id: participant.id,
        name: participant.name,
        score: participant.fika_score,
      };
    });

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
      <LoadingButton
        data-cy="manage-participants-btn"
        // type="link"
        variant="contained"
        margin="dense"
        sx={{
          backgroundColor: "#4C9074",
          m: 5,
        }}
        onClick={() => setOpen(true)}
      >
        Manage Participant
      </LoadingButton>
      <AddParticipantModal open={open} setOpen={setOpen} />
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
