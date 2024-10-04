import { Grid, Typography } from "@mui/material";
import React from "react";

const Work = () => {
  return (
    <Grid container className="work_description_parent_container">
      <Grid item xs={12} className="work_description_container_content">
        <Typography variant="h2" className="description_title">
          My Work
        </Typography>
        
      </Grid>
    </Grid>
  );
};

export default Work;
