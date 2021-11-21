import React from "react";
import { sections } from "./data/sections";
import { Box } from "@mui/material";

const SectionNames = () => {
  let categories = sections.map((section) => {
    return <li key={section.category}>{section.category}</li>;
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul data-cy="section-headers">{categories}</ul>
    </Box>
  );
};

export default SectionNames;
