import React from 'react'
import { sections } from './data/sections'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import welcomePageStyle from '../../theme/welcomePage'

const AboutSection = () => {
  const classes = welcomePageStyle()
  let aboutSections = sections.map((section) => {
    return (
      <div
        className={classes.faq}
        id={section.category}
        data-cy={`${section.category}-section`}
        key={section.category}>
        <Typography className={classes.faqHeader} variant='h3'>
          {section.header}
        </Typography>
        <Typography variant='p'>{section.content}</Typography>
        <Typography variant='p'>{section.list.point_1}</Typography>
        <Typography variant='p'>{section.list.point_2}</Typography>
        <Typography variant='p'>{section.list.point_3}</Typography>
        <Typography variant='p'>{section.list.point_4}</Typography>
        <Typography variant='p'>{section.list.point_5}</Typography>
        <Typography variant='p'>{section.list.point_6}</Typography>
      </div>
    )
  })

  return (
    <Container className={classes.aboutSection} data-cy='about-section'>
      {aboutSections}
    </Container>
  )
}

export default AboutSection
