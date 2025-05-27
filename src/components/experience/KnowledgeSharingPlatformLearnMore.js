import React from "react";
import ksp from "../../img/ksp.png";
import {
  Box,
  Typography,
  Container,
  Divider,
  Stack,
  Chip,
  Fade,
  Grow,
} from "@mui/material";

const mainImage =ksp;

export default function KnowledgeSharingPlatformLearnMore() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(120deg,#f7fafc 60%,#e3f2fd 100%)",
        py: { xs: 2, md: 8 },
        px: 0,
        animation: "fadeInBg 1.2s",
        "@keyframes fadeInBg": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background shapes */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -80, md: -140 },
          left: { xs: -60, md: -120 },
          width: { xs: 200, md: 340 },
          height: { xs: 200, md: 340 },
          background: "radial-gradient(circle at 40% 60%, #90caf933 60%, #fff0 100%)",
          zIndex: 0,
          filter: "blur(15px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -80, md: -120 },
          right: { xs: -60, md: -100 },
          width: { xs: 200, md: 340 },
          height: { xs: 200, md: 340 },
          background: "radial-gradient(circle at 60% 40%, #b2dfdb33 60%, #fff0 100%)",
          zIndex: 0,
          filter: "blur(19px)",
        }}
      />

       <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, px: { xs: 1, sm: 2, md: 0 } }}> {/* CHANGED: padding for mobile */}
        <Fade in timeout={900}>
          <Stack alignItems="center" spacing={2} mb={1}>
            <Chip
              label="📚 Knowledge Sharing Platform (KSP)"
              color="primary"
              sx={{
                fontWeight: "bold",
                letterSpacing: "0.04em",
                background: "linear-gradient(90deg,#1976d2 10%,#43a047 90%)",
                color: "#fff",
                borderRadius: 2,
                fontSize: { xs: "1rem", sm: "1.08rem" },
                boxShadow: "0 2px 14px 0 #1976d222",
              }}
            />
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                textAlign: "center",
                letterSpacing: ".03em",
                background: "linear-gradient(90deg, #1976d2 60%, #43a047 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
                userSelect: "none",
                fontSize: { xs: "1.6rem", sm: "2.3rem", md: "2.8rem" }, // CHANGED: smaller on xs
                transition: "transform .4s",
                ":hover": { transform: "scale(1.012)" },
              }}
            >
              A Project Built by a Student, for Students
            </Typography>
          </Stack>
        </Fade>

        {/* Main image */}
        <Grow in timeout={1200}>
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
             <Box
              component="img"
              src={mainImage}
              alt="Knowledge Sharing Platform Screenshot"
              loading="lazy"
              sx={{
                maxWidth: { xs: "96vw", sm: 540 }, // CHANGED: slightly smaller for xs
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(60,60,120,0.13)",
                transition: "box-shadow .4s, transform .4s",
                ":hover": {
                  boxShadow: "0 12px 48px 0 rgba(25,118,210,0.19)",
                  transform: "scale(1.03) rotate(-1.5deg)",
                },
              }}
            />
          </Box>
        </Grow>

        {/* Why I Chose This Project */}
        <Fade in timeout={1400}>
          <Box mb={4}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#1b5e20",
                mb: 1.5,
                fontSize: { xs: "1.1rem", md: "1.5rem" }, // CHANGED: smaller on xs
                textAlign:  "center"
              }}
            >
              🧠 Why I Chose This Project
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#444",
                mb: 3,
                fontSize: { xs: "1.01rem", md: "1.13rem" }, // CHANGED: smaller on xs
                textAlign:  "center"
              }}
            >
              As a student, I’ve personally experienced how time-consuming and frustrating it can be to find the right course materials, understand grading schemes, or even just get a sense of what to expect from a particular professor. There’s no single place that gives honest, crowd-sourced, and well-organized academic insights. That’s exactly the gap I wanted to help fill with KSP.<br /><br />
              This project wasn’t just a development task for me—it felt personal. I know how it feels to waste hours looking for the right notes or choosing a course blindly. So, I wanted to build something that could make a real difference, starting with my own academic circle.
            </Typography>
          </Box>
        </Fade>

        {/* My Contributions */}
         <Divider sx={{ mb: 3, bgcolor: "#b2dfdb" }} />
        <Fade in timeout={1700}>
          <Box mb={4}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: "#1976d2",
                mb: 1.5,
                fontSize: { xs: "1.1rem", md: "1.5rem" }, // CHANGED: smaller on xs
                textAlign: "center"
              }}
            >
              💻 My Contributions
             </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#444",
                mb: 2.5,
                fontSize: { xs: "1.01rem", md: "1.11rem" }, // CHANGED: smaller on xs
                textAlign:  "center"
              }}
            >
              The project already had a basic foundation with some initial pages like Home, Notes, PYQs, and a Course page. But there was no user profile setup, and the platform lacked interactivity and engagement features. That’s where my work began.
            </Typography>

            {/* PHASE 1 */}
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#43a047",
                mb: 1,
                fontSize: { xs: "1.01rem", md: "1.18rem" }, // CHANGED: smaller on xs
                textAlign:  "center",
              }}
            >
              🚀 Phase 1: User Profile & Discussion Page
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                mb: 2,
                fontSize: { xs: "0.97rem", md: "1.07rem" }, // CHANGED: smaller on xs
                textAlign:  "center", 
              }}
            >
              I built the user profile module from the ground up—everything from designing the frontend (<b>profile.tsx</b>) to setting up backend endpoints and database structure.
               <ul style={{ margin: "8px 0 8px 18px", textAlign: "center" }}>
                <li>Editable user profiles with dynamic updates</li>
                <li>Persistent data storage so that profile data doesn’t reset</li>
                <li>Seamless navigation from profile to discussion</li>
                <li>A full discussion page with edit, like, and delete options for messages</li>
              </ul>
              This phase was also my first real dive into backend development—and honestly, it transformed how I think about full-stack applications.
            </Typography>

            {/* PHASE 2 */}
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#43a047",
                mb: 1,
                fontSize: { xs: "1.01rem", md: "1.18rem" }, // CHANGED: smaller on xs
                textAlign: "center", 
              }}
            >
              🚀 Phase 2: Template Page & Popups
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                mb: 2,
                fontSize: { xs: "0.97rem", md: "1.07rem" }, // CHANGED: smaller on xs
                textAlign: "center", 
              }}
            >
              In Phase 2, I worked on making the platform more personalized and scalable by adding college-specific templates.
              <ul style={{ margin: "8px 0 8px 18px", textAlign: "center" }}>
                <li>Designed a pop-up system on the homepage that prompts users to log in and fill in college details</li>
                <li>Built a college card system where users can add/edit templates and switch colleges</li>
                <li>Implemented a search bar and popularity-based sorting using likes/stars</li>
              </ul>
              I focused on simplifying the file structure and learning from earlier mistakes—this helped in easier debugging and made development smoother.
            </Typography>
          </Box>
        </Fade>

        {/* Challenges & Learnings */}
        <Divider sx={{ my: 4, bgcolor: "#b2dfdb" }} />
        <Grow in timeout={2200}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                color: "#1b5e20",
                mb: 2,
                fontSize: { xs: "1.07rem", md: "1.23rem" }, // CHANGED: smaller on xs
                textAlign: "center",
              }}
            >
              🛠️ Challenges & What I Learned
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#444",
                mb: 3,
                fontSize: { xs: "1.01rem", md: "1.14rem" }, // CHANGED: smaller on xs
                textAlign: "center",
              }}
            >
              When I started, backend development was completely new territory for me. But through this project, I learned to:
              <ul style={{ margin: "8px 0 8px 18px" }}>
                <li>Understand the flow of data in a full-stack system</li>
                <li>Design API endpoints and ensure state persistence</li>
                <li>Debug real-world issues that arise during frontend-backend integration</li>
              </ul>
              From fixing card duplication bugs to dealing with missing state updates on refresh, every challenge taught me something valuable.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#1976d2",
                mb: 1.5,
                fontWeight: 700,
                textAlign:  "center"
              }}
            >
              Cheers to what I had till now!!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#444",
                fontSize: { xs: "1.01rem", md: "1.12rem" }, // CHANGED: smaller on xs
                mb: 2,
                textAlign: "center",
              }}
            >
              KSP wasn’t just about building features—it was about building something meaningful for the student community. It helped me grow technically, taught me the importance of clean structure, and most importantly, gave me a real taste of what it means to solve a problem that hits close to home.
              <br /><br />
              This is just the beginning. The platform still has a long way to go, and I’m excited to see how it evolves with contributions from more like-minded folks.
            </Typography>
          </Box>
        </Grow>
      </Container>
    </Box>
  );
}
