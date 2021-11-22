import { makeStyles } from '@mui/styles'

const welcomePageStyle = makeStyles((theme) => ({
  topBox: {
    paddingTop: '20px',
    marginTop: '-57px',
    background: 'linear-gradient(0deg, #011326 10%, #4C9074 90%)',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '0px',
    },
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    marginBottom: '15px',
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '20px 0px 50px 0px',
  },
  input: {
    width: '270px',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    },
  },
  btn: {
    display: 'flex',
    alignContent: 'center',
    height: '50px',
    marginBottom: '50px',
  },
  sectionHeaders: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '50px',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  aboutSection: {
    paddingBottom: '100px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '20px',
    },
  },
  faq: {
    marginBottom: '50px',
  },
  faqHeader: {
    marginBottom: '8px',
  },
}))

export default welcomePageStyle
