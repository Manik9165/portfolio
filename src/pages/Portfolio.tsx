import React from "react";
import { Grid } from "@mui/material";
import Description from "./Description";
import Work from "./Work";

const Portfolio = () => {
  return (
    <Grid container className="portfolio_container">
      <Description />
      <Work/>
    </Grid>
  );
};

export default Portfolio;
