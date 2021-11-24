import { makeStyles } from "@mui/styles";

const welcomePageStyle = makeStyles((theme) => ({
  topBox: {
    paddingTop: "20px",
    marginTop: "-57px",
    background: "linear-gradient(0deg, #011326 10%, #4C9074 90%)",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "0px",
    },
  },
  registerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "45rem",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px 0px 50px 0px",
  },
  inputRegister: {
    width: "270px",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
  },
  loginBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    background: "#011326",
    border: "2px solid #4C9074",
    padding: 25,
  },
  inputLogin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px 0px 20px 0px",
  },
  btn: {
    display: "flex",
    alignContent: "center",
    height: "50px",
    marginBottom: "50px",
  },
  sectionHeaders: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "0 20px",
    marginBottom: "50px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  aboutSection: {
    paddingBottom: "100px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "20px",
    },
  },
  faq: {
    marginBottom: "50px",
  },
  faqHeader: {
    marginBottom: "8px",
  },
}));

export default welcomePageStyle;
