import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import BubblesBackground from "./BubblesBackground";

// ICON IMPORTS
import { FaJava, FaReact, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiFrontendmentor, SiC, SiAdobephotoshop, SiCss3, SiHtml5, SiFirebase, SiMongodb } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const aboutMeText = `I'm a passionate developer with a strong belief that user experience and opinions are the cornerstone of every successful application or model. I enjoy getting to know things through experience and real-life projects. While I often work independently, I value teamwork, as it allows me to explore diverse perspectives and innovative solutions, driving technology forward to provide the best possible outcomes.`;

const skills = [
  { name: "Java", icon: <FaJava color="#007396" size={28} /> },
  { name: "UI/UX", icon: <MdWeb color="#1de9b6" size={28} /> },
  { name: "React.js", icon: <FaReact color="#61DBFB" size={28} /> },
  { name: "Node.js", icon: <FaNodeJs color="#68A063" size={28} /> },
  { name: "Typescript", icon: <TbBrandTypescript color="#007acc" size={28} /> },
  { name: "Frontend Development", icon: <SiFrontendmentor color="#3e54a3" size={28} /> },
  { name: "C", icon: <SiC color="#00599C" size={28} /> },
  { name: "Figma", icon: <FaFigma color="#a259ff" size={28} /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop color="#001E36" size={28} /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" size={28} /> },
  { name: "CSS", icon: <SiCss3 color="#2965f1" size={28} /> },
  { name: "HTML", icon: <SiHtml5 color="#e34c26" size={28} /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={28} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={28} /> },
  { name: "Data Structures & Algorithms", icon: <GiBrain color="#8d6e63" size={28} /> },
  { name: "Web Development", icon: <MdWeb color="#009688" size={28} /> },
];

const About = () => (
  <>
    <BubblesBackground />
    <Box
      minHeight="100vh"
      width="100%"
      display="flex"
      alignItems={{ xs: "flex-start", md: "center" }} // CHANGED
      justifyContent="center"
      position="relative"
      zIndex={2}
      sx={{
        pt: { xs: 7, sm: 8, md: 10 }
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          px: { xs: 1, sm: 3, md: 6 }, // CHANGED: less padding for xs
          mx: "auto", // CHANGED: always center horizontally
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight={900}
          mb={3}
          color="primary.main"
          sx={{
            letterSpacing: 3,
            textAlign: "center",
            textShadow: "0 2px 12px #20204044",
             fontSize: { xs: "2rem", sm: "2.5rem", md: "2.8rem" } // CHANGED
          }}
        >
          ABOUT ME
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          color="grey.900"
          sx={{
            textAlign: { xs: "center", md: "left" }, // CHANGED: center for xs, left for md+
            lineHeight: 1.7,
            letterSpacing: 0.5,
            fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.38rem" }, // CHANGED: smaller on xs
            textShadow: "0 2px 10px #e0f7fa77",
            mb: 5,
          }}
        >
          {aboutMeText}
        </Typography>

        <Typography
          variant="h4"
          fontWeight={800}
          color="primary"
          sx={{
            textAlign: "center",
            mb: 3,
            letterSpacing: 2,
            fontSize: { xs: "1.09rem", sm: "1.18rem", md: "1.35rem" } // CHANGED
          }}
        >
         SKILLS
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2 }} justifyContent="center">
          {skills.map((skill, idx) => (
            <Grid key={idx} item xs={6} sm={4} md={3}>
              <Paper
                elevation={2} // CHANGED: less shadow for mobile
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: { xs: 1, sm: 2 }, // CHANGED: less padding on xs
                  borderRadius: 3,
                  boxShadow: { xs: "0 2px 8px 0 #b2dfdb11", sm: "0 4px 20px 0 #b2dfdb22" },
                  minHeight: { xs: 70, sm: 90 }, // CHANGED: smaller for xs
                  transition: "transform 0.22s, box-shadow 0.22s",
                  "&:hover": {
                    transform: "scale(1.09) translateY(-4px)",
                    boxShadow: "0 8px 33px 0 #00968833",
                  },
                  bgcolor: "rgba(255,255,255,0.95)",
                  mb: 1
                }}
              >
               <Box sx={{ mb: 1 }}>{skill.icon}</Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: "#3949ab",
                    textAlign: "center",
                    fontSize: { xs: "0.89rem", sm: "1.07rem" } 
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </>
);

export default About;
