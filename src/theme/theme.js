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
        primary: "#ccc",
        secondary: "#4C9074",
      },
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: "15px",
    },
    h2: {
      fontSize: 30,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 22,
      fontWeight: "bold",
    },
    faqLinks: {
      fontSize: 20,
      textDecorationLine: "underline",
      margin: "1rem",
    },
    p: {
      fontSize: 17,
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
