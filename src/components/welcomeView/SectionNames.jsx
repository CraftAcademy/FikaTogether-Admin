import React from 'react'
import { sections } from './data/sections'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import welcomePageStyle from '../../theme/welcomePage'

const SectionNames = () => {
  const classes = welcomePageStyle()

  let headers = sections.map((section) => {
    return (
      <Typography variant='faqLinks' key={section.header}>
        <Link to={section.category} spy={true} smooth={true}>
          {section.header}
        </Link>{' '}
      </Typography>
    )
  })

  return (
    <Box className={classes.sectionHeaders} data-cy='section-headers'>
      {headers}
    </Box>
  )
}

export default SectionNames
