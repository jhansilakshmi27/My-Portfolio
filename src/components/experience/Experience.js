import React from "react";
import myntra from "../../img/myntra.jpeg";
import stock from "../../img/stock.jpg";
import realestate from "../../img/realestate.jpg";

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Stack, Link as MuiLink, Paper } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import InfoIcon from "@mui/icons-material/Info";
import { Link as RouterLink } from "react-router-dom";

const projects = [
  {
    title: "Myntra HackerRamp: WeForShe 2024",
    description:
      "An opportunity that celebrates innovation, inclusivity, and women in tech, HackerRamp: WeForShe 2024 is Myntra’s women-focused hackathon aimed at empowering aspiring developers to solve real-world challenges in the fashion-tech space, offering a platform to showcase skills, collaborate with peers, and receive mentorship from industry leaders.",
    image: myntra,
    github: "https://github.com/pragnasri74/Myntra-HackerRamp---InnovHer-Team.git",
    learnMore: "/experience/myntra-hackerramp",
  },
  {
    title: "Knowledge Sharing Platform",
    description:
      "A platform designed to simplify academic decision-making by crowd-sourcing course insights, professor reviews, grading schemes, and relevant resources, enabling students to share honest feedback, access peer experiences, and find all essential information in one place—fostering transparency, reliability, and smarter choices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80",
    github: "https://github.com/jhansilakshmi27/Knowledge-Sharing-Platform",
    learnMore: "/experience/knowledge-sharing-platform",
  },
  {
    title: "Stock Price Prediction",
    description:
      "A predictive model combining news sentiment (via BERT, DistilBERT) with stock indicators to forecast market trends. Merged Nifty50 data with daily news to enhance accuracy using Random Forest and LightGBM.",
    image: stock,
    github: "https://github.com/JhansiMatcha/Stock_Price_Prediction",
    // No learnMore key here
  },
  {
    title: "Real Estate Website Development Internship - Basil Infotech",
    description:
      "Worked as an intern to design and develop a modern real estate website using TypeScript, CSS, and JavaScript. Contributed to features such as property listings, responsive layouts, and user-friendly navigation, enhancing the overall user experience and functionality of the platform.",
    image: realestate,
    github: "https://github.com/ashwaniraj0813/real_estate",
    // No learnMore key here
  },
];

const achievements = [
  "KSP-Mentee@FOSS Overflow'25 - IIT Bhilai (Feb 2025 to Mar 2025)",
  "Shortlisted for Implementation Phase - Myntra Hackerramp (Aug 2024)",
  "Member of Designx - IIT Bhilai (May 2024 to May 2025)",
  "Member of COSA-Social Media Club - IIT Bhilai (May 2024 to May 2025)",
];

export default function Experience() {
  const navbarHeight = 80;
  return (
    <Box
      id="experience"
      sx={{
        p: { xs: 1, md: 4 },
        bgcolor: "#f7fafc",
        minHeight: "100vh",
        pt: { xs: `${navbarHeight + 24}px`, sm: `${navbarHeight + 32}px`, md: `${navbarHeight + 40}px` },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={800}
        mb={4}
        sx={{
          color: "#009688",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid key={idx} item xs={12} md={10}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                overflow: "hidden",
                borderRadius: 4,
                boxShadow: 4,
                mb: 3,
                background: "#fff",
                transition: "box-shadow 0.3s, transform 0.3s",
                "&:hover": {
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.21)",
                  transform: "translateY(-6px) scale(1.025)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                sx={{
                  width: { xs: "100%", sm: 260 },
                  height: { xs: 180, sm: "auto" },
                  objectFit: "cover",
                }}
              />
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{ color: "#3949ab" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto", pl: 2, pb: 2, gap: 2 }}>
                  {/* Show "Learn about my experience" only if learnMore exists */}
                  {project.learnMore ? (
                    <Button
                      component={RouterLink}
                      to={project.learnMore}
                      variant="outlined"
                      color="primary"
                      size="small"
                    >
                      Learn about my experience
                    </Button>
                  ) : null}
                  <MuiLink
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      endIcon={<LaunchIcon />}
                    >
                      GitHub Repo
                    </Button>
                  </MuiLink>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h4"
        fontWeight={800}
        mt={6}
        mb={2}
        sx={{
          color: "#00796b",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Achievements & Positions of Responsibility
      </Typography>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ mt: 2, mb: 5 }}
      >
        {achievements.map((ach, idx) => (
          <Paper
            key={idx}
            elevation={1}
            sx={{
              px: 3,
              py: 1.3,
              bgcolor: "#e0f2f1",
              minWidth: { xs: "80vw", sm: 480 },
              borderRadius: 3,
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                boxShadow: "0 6px 28px 0 rgba(0,0,0,0.18)",
                transform: "translateY(-4px) scale(1.02)",
              }
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, color: "#004d40", textAlign: "center" }}
            >
              {ach}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
