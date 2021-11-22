import { makeStyles } from '@mui/styles'

const miscStyle = makeStyles((theme) => ({
  logo: {
    height: '60px',
    [theme.breakpoints.up('md')]: {
      height: '65px',
    },
  },
}))

export default miscStyle
