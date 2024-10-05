import React from "react";
import { Grid } from "@mui/material";
import Description from "./Description";
import Skills from "./Skills";

const Portfolio = () => {
  return (
    <Grid container className="portfolio_container">
      <Description />
      <Skills/>
    </Grid>
  );
};

export default Portfolio;
