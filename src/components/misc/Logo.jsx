import React from 'react'
import logo from '../../img/logo.png'
import { BottomNavigationAction } from '@mui/material'
import { Link } from 'react-router-dom'
import miscStyle from '../../theme/miscStyle'

const Logo = () => {
  const classes = miscStyle()
  return (
    <>
      <BottomNavigationAction
        component={Link}
        to='/'
        data-cy='events-btn'
        icon={
          <img
            src={logo}
            alt='Logo'
            className={classes.logo}
          />
        }
      />
    </>
  )
}

export default Logo
