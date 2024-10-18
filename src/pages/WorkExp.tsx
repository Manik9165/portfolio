import React from "react";
import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Nagarro from "../assets/images/nagarro_logo.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface workExpProps {
  id: number;
  value: string;
}

const WorkExp = () => {
  const workExp: workExpProps[] = [
    {
      id: 1,
      value: `The project involves developing a comprehensive portal application from the ground up to efficiently manage the
      client’s business operations.`,
    },
    {
      id: 2,
      value: `Developed numerous UI components using the Material-UI library, ensuring full responsiveness across diverse
      devices.`,
    },
    {
      id: 3,
      value: `Implemented state management solutions utilizing Redux and Context API, maintaining generic code applicable
      throughout the application.`,
    },
    {
      id: 4,
      value: `Utilized React Query for managing asynchronous operations with backend services.`,
    },
    {
      id: 5,
      value: `Integrated the ag-grid-react library to implement responsive grid systems across all devices.`,
    },
    {
      id: 6,
      value: `Ensured adherence to Section 508 Compliance standards, achieving over 90% accessibility coverage for the
      application.`,
    },
    {
      id: 7,
      value: `Tech Stack – React.js, Redux, Ag-grid-React, React Query, Jest`,
    },
  ];

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
          <Grid item xs={12} sm={12} md={12} className="work_exp_right_div">
            <Card className="work_exp_right_card">
              <CardContent className="card_heading">
                <Typography className="company_heading" variant="h2">
                  Nagarro Software Pvt. Ltd.{" "}
                  <span className="company_logo">
                    <img src={Nagarro} alt="Nagarro logo" />
                  </span>
                </Typography>

                <Typography className="company_profile" variant="h4">
                  Profile:{" "}
                  <span className="company_profile_name">Engineer</span>
                </Typography>

                <Typography variant="body1" className="company_brief">
                  I have successfully delivered multiple projects, consistently
                  meeting deadlines and producing high-quality work. Implemented
                  unit tests to achieve an impressive 90%+ code coverage.
                </Typography>
                <Typography className="company_brief">
                  Current Project:{" "}
                  <span className="company_project_name">
                    eCommerce Application - The Portal
                  </span>
                </Typography>

                <List className="company_project_exp_list">
                  {workExp.map((exp) => (
                    <ListItem key={exp.id} className="company_project_exp_listitem">
                      <ArrowRightIcon />
                      {` ${exp.value}`}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkExp;
