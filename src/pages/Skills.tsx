import React from "react";
import { Grid, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Skills = () => {
  const data = {
    labels: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Jest",
    ],
    datasets: [
      {
        label: "Skills Proficiency (%)",
        data: [70, 65, 85, 70, 70, 75, 65, 55], // Your skill levels in percentage
        backgroundColor: "rgba(2, 15, 32, 0.9)",
        borderColor: "rgba(2, 15, 32, 1)",
        borderWidth: 2,
        barThickness: 50,
      },
    ],
  };

  // Options to customize the graph appearance
  const options = {
    responsive: true,
    plugins: {},
    scales: {
      x: {
        ticks: {
          font: {
            size: 20,
            family:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          },
          color: "#020f20",
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
            family:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          },
          color: "#020f20",
        },
        beginAtZero: true, // Ensure y-axis starts from 0
      },
    },
  };

  return (
    <Grid container className="skills_description_parent_container">
      <Grid item xs={12} className="skills_description_container_content">
        <Typography variant="h2" className="description_title">
          Skills
        </Typography>
      </Grid>
      <Grid style={{ width: "60%", margin: "0 auto" }}>
        <Bar data={data} options={options} />
      </Grid>
    </Grid>
  );
};

export default Skills;
