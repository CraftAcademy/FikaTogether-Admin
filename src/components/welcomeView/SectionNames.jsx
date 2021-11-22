import React from 'react'
import { sections } from './data/sections'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import welcomePageStyle from '../../theme/welcomePage'

const SectionNames = () => {
  const classes = welcomePageStyle()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 675px)' })

  const header = {
    m: '1rem',
    fontSize: 20,
    textDecorationLine: 'underline',
  }

  let headers = sections.map((section) => {
    return (
      <Typography sx={header} key={section.header}>
        <Link to={section.category} spy={true} smooth={true}>
          {section.header}
        </Link>{' '}
      </Typography>
    )
  })

  return (
    <Box className={classes.sectionHeaders} data-cy='section-headers'>
      {!isTabletOrMobile ? headers : <ul>{headers}</ul>}
    </Box>
  )
}

export default SectionNames
