import React from "react";
import { sections } from "./data/sections";
import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const SectionNames = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 675px)" });

  const header = {
    m: "1rem",
    fontSize: 20,
    textDecorationLine: 'underline'
  };

  let headers = sections.map((section) => {
    return (
      <Typography sx={header} key={section.header}>
        <Link to={section.category} spy={true} smooth={true}>
          {section.header}
        </Link>{" "}
      </Typography>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      data-cy="section-headers"
    >
      {!isTabletOrMobile ? (
         headers
      ) : (
        <ul >{headers}</ul>
      )}
    </Box>
  );
};

export default SectionNames;
