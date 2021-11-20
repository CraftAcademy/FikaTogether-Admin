import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Button } from "@mui/material";

const WelcomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        data-cy="login-modal-btn"
        variant="contained"
        margin="dense"
        sx={{
          backgroundColor: "#4C9074",
          m: 5,
        }}
        onClick={() => setOpen(true)}
      >
        Sign In
      </Button>
      <LoginModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default WelcomePage;
