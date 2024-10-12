import React from "react";
import { Grid } from "@mui/material";
import Description from "./Description";
import Skills from "./Skills";
import WorkExp from "./WorkExp";

const Portfolio = () => {
  return (
    <Grid container className="portfolio_container">
      <Description />
      <Skills />
      <WorkExp />
    </Grid>
  );
};

export default Portfolio;
