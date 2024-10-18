import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "p-1",
      name: "My-Yt",
      image: "",
      description:
        "I've created a YouTube-inspired clone using React.js, with a detailed explanation added to my resume. 'My-Yt' is definitely worth a preview, don't you think?",
      previewLink: "#",
    },
    {
      id: "p-2",
      name: "Netflix-clone",
      image: "",
      description:
        "I developed a Netflix-style clone using React.js, complete with a detailed write-up in my resume. With its sleek design and intuitive interface, my 'Netflix Clone' is ready for a binge-worthy preview!",
      previewLink: "#",
    },
    {
      id: "p-3",
      name: "Meet-up",
      image: "",
      description:
        "Developed a Google meet clone using Next.js, Node.js and web-RTC. This project gave a good understanding of how web-sockets work.",
      previewLink: "#",
    },
    {
      id: "p-4",
      name: "Post-creator",
      image: "",
      description:
        "Created a basic post creation application using Node.js, Express and Mongo. Basic but a good learning experience.",
      previewLink: "#",
    },
  ];

  return (
    <Grid container className="project_description_parent_container">
      <Grid
        item
        xs={12}
        className="project_description_container_content portfolio_headings"
      >
        <Typography variant="h2" className="description_title">
          Projects
        </Typography>
      </Grid>
      <Grid item xs={12} className="project_description_tiles">
        <Grid container className="project_description_tiles_list">
          {projects.map((prj) => (
            <Grid key={prj.id} className="desc_tile">
              <Card>
                <CardMedia
                  image={prj.image}
                  title="Preview Image"
                  className="prj_img"
                />
                <CardContent>
                  <Typography className="prj_name" variant="h5">
                    {prj.name}
                  </Typography>
                  <Typography className="prj_desc" variant="body2">
                    {prj.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button>
                    <Link to={prj.previewLink}>Preview Link</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
