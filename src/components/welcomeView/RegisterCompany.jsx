import React from 'react'
import { Button, Box, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import welcomePageStyle from '../../theme/welcomePage'

const RegisterCompany = () => {
  const classes = welcomePageStyle()
  const { t } = useTranslation()

  // const typography = {
  //   fontSize: 30,
  //   m: 1,
  //   fontWeight: 'bold',
  // }

  return (
    <Box className={classes.registerContainer}>
      <Typography variant='h1' className={classes.header} >{t('culture')}</Typography>{' '}
      <Typography variant='h2'>{t('register1')}</Typography> <br />
      <Box className={classes.inputBox}>
        <TextField
          className={classes.input}
          data-cy='company-name'
          id='name'
          label='Company Name'
          variant='outlined'
          margin='dense'
          type='password'
        />
        <TextField
          className={classes.input}
          data-cy='company-email'
          id='email'
          label={t('email')}
          variant='outlined'
          margin='dense'
        />
      </Box>
      <Button
        data-cy='register-interest-btn'
        type='submit'
        variant='outlined'
        margin='dense'
        className={classes.btn}>
        {t('register2')}
      </Button>
      <Typography variant='h2'>
        Or read on to find out why you should.
      </Typography>{' '}
    </Box>
  )
}

export default RegisterCompany
