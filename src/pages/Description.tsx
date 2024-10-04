import { Grid, Typography } from "@mui/material";

import React from "react";

const Description = () => {
  return (
    <Grid className="brief_description_parent_container">
      <Grid container className="brief_description_child_container">
        <Grid item xs={8} className="brief_description_container_content">
          <Typography variant="h2" className="description_title">
            Hey, I'm Manik.
          </Typography>
          <Typography variant="body1" className="description">
            A Front-end Developer based in India. I have worked on a wide range
            of front-end projects, from eCommerce websites to complex web
            platforms, with a focus on creating clean, well-crafted interfaces
            that not only look great but also provide a seamless user
            experience.
          </Typography>
        </Grid>
        <Grid item xs={4} className="brief_description_container_image">
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Description;
