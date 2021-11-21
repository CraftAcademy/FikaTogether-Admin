import React from "react";
import { sections } from "./data/sections";
import { Box } from "@mui/material";
import { Link } from "react-scroll";

const SectionNames = () => {
  let headers = sections.map((section) => {
    return (
      <li key={section.header}>
        <Link to={section.category} spy={true} smooth={true}>
          {section.header}
        </Link>{" "}
      </li>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul data-cy="section-headers">{headers}</ul>
    </Box>
  );
};

export default SectionNames;
