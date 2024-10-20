import { Divider, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  addressTo: string;
  icon?: JSX.Element;
}

const Description = () => {
  const buttons: ButtonProps[] = [
    {
      addressTo: "https://www.linkedin.com/in/manik9165/",
      icon: <LinkedInIcon />,
    },
    {
      addressTo: "https://github.com/Manik9165",
      icon: <GitHubIcon />,
    },
    {
      addressTo: "mailto:manikkapoor9165@gmail.com",
      icon: <EmailOutlinedIcon />,
    },
  ];

  return (
    <Grid className="brief_description_parent_container">
      <Grid container className="brief_description_child_container">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          className="brief_description_container_content"
        >
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
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="brief_description_container_icons"
        >
          {buttons.map((btn, index) => (
            <IconButton key={index}>
              <Link to={btn.addressTo}>{btn.icon}</Link>
            </IconButton>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Description;
