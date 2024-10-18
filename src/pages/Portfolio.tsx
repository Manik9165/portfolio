import React from "react";
import { Grid } from "@mui/material";
import Description from "./Description";
import Skills from "./Skills";
import WorkExp from "./WorkExp";
import Projects from "./Projects";
import FooterDesc from "./FooterDesc";

const Portfolio = () => {
  return (
    <Grid container className="portfolio_container">
      <Description />
      <Skills />
      <WorkExp />
      <Projects />
      <FooterDesc />
    </Grid>
  );
};

export default Portfolio;
