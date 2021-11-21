import React from "react";
import { sections } from "./data/sections";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";


const AboutSection = () => {

  const header = {
    fontSize: 22,
    m: 1,
    fontWeight: "bold",
  }

  const content = {
    fontSize: 17,
    m: 1,
  }
  
  const list = {
    fontSize: 17,
    m: 1,
  }
  let aboutSections = sections.map((section) => {
    return (
      <div
        id={section.category}
        data-cy={`${section.category}-section`}
        key={section.category}
      >
        <Typography sx={header} component="div">{section.header}</Typography>
        <Typography sx={content} component="div">{section.content}</Typography>
        <Typography sx={list} component="div">{section.list.point_1}</Typography>
        <Typography sx={list} component="div">{section.list.point_2}</Typography>
        <Typography sx={list} component="div">{section.list.point_3}</Typography>
        <Typography sx={list} component="div">{section.list.point_4}</Typography>
        <Typography sx={list} component="div">{section.list.point_5}</Typography>
        <Typography sx={list} component="div">{section.list.point_6}</Typography>
      </div>
    );
  });

  return <Container data-cy="about-section">{aboutSections}</Container>;
};

export default AboutSection;
