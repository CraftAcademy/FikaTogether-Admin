import React from 'react'
import { Button, Box, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import welcomePageStyle from '../../theme/welcomePage'

const RegisterCompany = () => {
  const classes = welcomePageStyle()
  const { t } = useTranslation()

  return (
    <Box className={classes.registerContainer}>
      <Typography variant='h1'>{t('culture')}</Typography>{' '}
      <Typography variant='h2'>{t('register1')}</Typography> <br />
      <Box className={classes.inputBox}>
        <TextField
          className={classes.input}
          data-cy='company-name'
          id='name'
          label={t('companyName')}
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
      {t("readInfo")}
      </Typography>{' '}
    </Box>
  )
}

export default RegisterCompany
