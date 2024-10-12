import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Nagarro from "../assets/images/nagarro_logo.png";

const WorkExp = () => {
  return (
    <Grid container className="skills_description_parent_container">
      <Grid
        item
        xs={12}
        className="skills_description_container_content portfolio_headings"
      >
        <Typography variant="h2" className="description_title">
          Work Experience
        </Typography>
      </Grid>
      <Grid item xs={12} className="work_experience_parent_container">
        <Grid container className="work_experience_child_container">
          <Grid item xs={12} sm={12} md={3} className="work_exp_left_div">
            <Card className="work_exp_left_card">
              <CardContent className="card_heading">
                <Typography variant="h2">Company</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={9} className="work_exp_right_div">
            <Card className="work_exp_right_card">
              <CardContent className="card_heading">
                <Typography variant="h2">
                  Nagarro Software Pvt. Ltd.{" "}
                  <span className="company_logo">
                    <img src={Nagarro} alt="Nagarro logo" />
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkExp;
