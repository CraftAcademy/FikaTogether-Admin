import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ...{
      primary: {
        main: "#ffffff",
        default: "#ffffff",
        container: "#011326",
      },
      background: {
        default: "#011326",
        paper: "#011326",
        container: "#4C9074",
      },
      text: {
        primary: "#D6BC01",
        secondary: "#4C9074",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: "#4C9074",
          color: "#D6BC01",
          font: "small-caption",
          fontWeight: "bold",
        },
      },
    },
  },
  zIndex: {
    Paper: 1500,
  },
});

export default theme;
