import React from "react";
import { sections } from "./data/sections";
import { Container } from "@mui/material";

const AboutSection = () => {
  let aboutSections = sections.map((section) => {
    return (
      <div id={section.category} data-cy={`${section.category}-section`} key={section.category}>
        {" "}
        <h3 >{section.header}</h3>
        <body>{section.content}</body>
        <body>{section.list.point_1}</body>
        <body>{section.list.point_2}</body>
        <body>{section.list.point_3}</body>
        <body>{section.list.point_4}</body>
        <body>{section.list.point_5}</body>

      </div>
    );
  });

  return <Container data-cy="about-section">{aboutSections}</Container>;
};

export default AboutSection;
