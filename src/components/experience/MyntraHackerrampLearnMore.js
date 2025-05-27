import React from "react";
import myntra from "../../img/myntra.jpeg";
import {
  Box,
  Typography,
  Container,
  Fade,
  Grow,
  Divider,
  Stack,
  Chip,
  useTheme,
  Slide,
} from "@mui/material";

const mainImage = myntra;

export default function MyntraHackerrampLearnMore() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%", // FIX: was 100vw, now 100%
        background: "linear-gradient(120deg,#f5fafd 60%,#e0f7fa 100%)",
        py: { xs: 2, sm: 4, md: 8 },
        px: 0,
        animation: "fadeInBg 1.2s",
        "@keyframes fadeInBg": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        position: "relative",
        overflow: "hidden",
        display: "flex",               // ADD
        flexDirection: "column",       // ADD
        alignItems: "center",          // ADD: centers horizontally on all screens
      }}
    >
      {/* Decorative spotlights */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -60, md: -120 },
          left: { xs: -80, md: -140 },
          width: { xs: 170, md: 340 },
          height: { xs: 170, md: 340 },
          background: "radial-gradient(circle at 40% 60%, #b2dfdb33 60%, #fff0 100%)",
          zIndex: 0,
          filter: "blur(14px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -60, md: -120 },
          right: { xs: -80, md: -120 },
          width: { xs: 180, md: 340 },
          height: { xs: 180, md: 340 },
          background: "radial-gradient(circle at 60% 40%, #bbdefb33 60%, #fff0 100%)",
          zIndex: 0,
          filter: "blur(16px)",
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 1, sm: 2, md: 0 },
          width: "100%",              // ADD: always take full width of parent
          mx: "auto",                 // ADD: center on small screens
        }}
      >
        <Fade in timeout={1000}>
          <Stack alignItems="center" spacing={2} mb={1}>
            <Chip
              label="Myntra HackerRamp: WeForShe 2024"
              color="info"
              size="medium"
              sx={{
                fontWeight: "bold",
                letterSpacing: "0.04em",
                background: "linear-gradient(90deg,#009688 10%,#3949ab 90%)",
                color: "#fff",
                borderRadius: 2,
                fontSize: { xs: "0.95rem", sm: "1rem" },
                boxShadow: "0 2px 14px 0 #3949ab22",
              }}
            />
            <Typography
              variant="h2"
              fontWeight={900}
              gutterBottom
              sx={{
                textAlign: "center",
                letterSpacing: ".03em",
                background: "linear-gradient(90deg, #3949ab 60%, #009688 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                userSelect: "none",
                transition: "transform 0.4s",
                fontSize: { xs: "1.6rem", sm: "2.3rem", md: "2.8rem" },
                ":hover": { transform: "scale(1.015)" },
              }}
            >
              A Journey Through Innovation
            </Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{
                color: "#3949ab",
                mb: { xs: 1.5, md: 2.5 },
                letterSpacing: ".01em",
                fontSize: { xs: "1rem", sm: "1.18rem", md: "1.37rem" },
                opacity: 0.92,
                textAlign: "center"
              }}
            >
              Our HackerRamp Ride with Team INNOVHER 🚀
            </Typography>
          </Stack>
        </Fade>
        <Fade in timeout={1800}>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontSize: { xs: "0.98rem", sm: "1.09rem", md: "1.13rem" },
              mb: 4,
              maxWidth: 850,
              mx: "auto",
              letterSpacing: "0.01em",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Every idea begins with a spark—and for us, it was more like a flurry of sparks flying everywhere!
            The Myntra HackerRamp: WeForShe 2024 was more than just a hackathon. It was a four-phase challenge that pushed us beyond code and creativity into real-world problem-solving.<br /><br />
            Our team, named <b>INNOVHER</b>, dived headfirst into the challenge—ready to brainstorm, build, and bring something meaningful to the table.
          </Typography>
        </Fade>
        <Grow in timeout={2200}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
            <Box
              component="img"
              src={mainImage}
              alt="Team INNOVHER at Myntra HackerRamp"
              loading="lazy"
              sx={{
                maxWidth: { xs: "99vw", sm: 440 },
                width: "100%",
                borderRadius: "22px",
                boxShadow: "0 8px 32px 0 rgba(60,60,120,0.18)",
                transition: "box-shadow .4s, transform .4s",
                ":hover": {
                  boxShadow: "0 14px 48px 0 rgba(0,150,136,0.23)",
                  transform: "scale(1.04) rotate(-2.5deg)",
                },
              }}
            />
          </Box>
        </Grow>

        <Slide in direction="up" timeout={1200}>
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={1}
            useFlexGap
            alignItems="center"
            justifyContent="center"
            mb={2}
            sx={{
              width: "100%",
              mx: "auto",
              maxWidth: { xs: 340, sm: 600, md: 900 },
            }}
          >
            <Chip
              icon={<span style={{ fontSize: "1.35em" }}>🧠</span>}
              label="Trend Identification & Designing"
              sx={{
                bgcolor: "#e0f2f1",
                color: "#00796b",
                fontWeight: 600,
                fontSize: { xs: "0.84rem", sm: "1rem" },
                px: 2,
                py: 1,
                letterSpacing: "0.02em",
                borderRadius: 2,
                minWidth: { xs: 0, sm: 0 },
                textAlign: "center",
                whiteSpace: "normal",
              }}
            />
            <Chip
              icon={<span style={{ fontSize: "1.22em" }}>🎬</span>}
              label="Movie Costumes"
              sx={{
                bgcolor: "#e8eaf6",
                color: "#3949ab",
                fontWeight: 600,
                fontSize: { xs: "0.84rem", sm: "1rem" },
                px: 2,
                py: 1,
                letterSpacing: "0.02em",
                borderRadius: 2,
                minWidth: { xs: 0, sm: 0 },
                textAlign: "center",
                whiteSpace: "normal",
              }}
            />
            <Chip
              icon={<span style={{ fontSize: "1.22em" }}>🛋️</span>}
              label="AR Home Decor"
              sx={{
                bgcolor: "#e3f2fd",
                color: "#0277bd",
                fontWeight: 600,
                fontSize: { xs: "0.84rem", sm: "1rem" },
                px: 2,
                py: 1,
                letterSpacing: "0.02em",
                borderRadius: 2,
                minWidth: { xs: 0, sm: 0 },
                textAlign: "center",
                whiteSpace: "normal",
              }}
            />
          </Stack>
        </Slide>

        <Fade in timeout={2600}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 4,
                fontSize: { xs: "0.97rem", sm: "1.04rem", md: "1.09rem" },
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              We chose the problem statement <b>Trend Identification and Designing</b>—and immediately dove into brainstorming.
              At first, everything felt like it had already been done. AI assistants? Check. Rewards programs? Check.
              Cool... but nothing that felt fresh or impactful for both customers and Myntra.<br /><br />
              That’s when we decided to go back to the people. We spoke to relatives, neighbors, and friends to understand what real users actually wanted. The conversations opened our eyes—and soon, our idea started taking shape.
            </Typography>
            <Divider sx={{ mb: 4, bgcolor: "#b2dfdb" }} />
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#3949ab",
                mb: 1,
                fontSize: { xs: "1.01rem", md: "1.2rem" },
                letterSpacing: ".01em",
                display: "flex",
                gap: 1,
                alignItems: "center",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              🎬 Idea #1: Movie Costumes, Made Accessible
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 3,
                fontSize: { xs: "0.97rem", sm: "1.04rem", md: "1.07rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Remember how kids love dressing up like their favorite movie characters? The market has those costumes—but not in one place.
              No easy way to find them, compare them, or even know if they exist. So we thought:
              <br /><br />
              <span style={{ fontStyle: "italic" }}>
                Why not build a platform that brings movie-inspired outfits to one place, in a way that's fun and intuitive?
              </span>
              <br /><br />
              We designed web pages that showcase trending films. Users could select a movie → choose a character → and instantly view available costumes to purchase directly through the platform.
              <br /><br />
              <b>It’s a win-win:</b>
              <ul style={{ marginTop: 4, marginBottom: 0 }}>
                <li>✅ Easy for customers to relive their movie moments</li>
                <li>✅ Increased engagement and sales for Myntra</li>
              </ul>
            </Typography>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: "#3949ab",
                mb: 1,
                fontSize: { xs: "1.01rem", md: "1.2rem" },
                letterSpacing: ".01em",
                display: "flex",
                gap: 1,
                alignItems: "center",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              🛋️ Idea #2: AR-Powered Home Decor
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                mb: 3,
                fontSize: { xs: "0.97rem", sm: "1.04rem", md: "1.07rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Let’s face it—returning furniture is a nightmare. Online shopping for home decor is full of guesswork. That’s why we thought:
              <br /><br />
              <span style={{ fontStyle: "italic" }}>
                What if customers could place the furniture in their room—virtually—before buying it?
              </span>
              <br /><br />
              Using Augmented Reality (AR), we envisioned a feature where users could preview how furniture would look in their own space. This reduces uncertainty, avoids unnecessary returns, and saves cost & effort for everyone involved.
              <br />
              As regular online shoppers we’ve returned a bit too many things, we knew how real this problem was 😅.
            </Typography>
            <Divider sx={{ my: 4, bgcolor: "#b2dfdb" }} />
            <Grow in timeout={3300}>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={800}
                  sx={{
                    color: "#009688",
                    mb: 2,
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  💡 What We Learned
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#444",
                    mb: 3,
                    fontSize: { xs: ".98rem", sm: "1.07rem", md: "1.12rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Even though we didn’t advance past this phase—possibly due to our limited AR implementation experience—we walked away with something more valuable:
                  <br /><br />
                  <b>Empathy matters. Listening to users can unlock the most meaningful solutions.</b>
                  <br /><br />
                  The HackerRamp journey taught us how user-centric design can bridge the gap between what’s trending and what’s truly needed. And though our prototype wasn’t perfect,  the idea had power.
                  <br /><br />
                  Our team, INNOVHER, took bold steps and explored ideas grounded in reality. From costume dreams to immersive decor, we chased experiences that made shopping fun, efficient, and personalized.
                  <br /><br />
                  <span style={{ fontStyle: "italic" }}>
                    This was more than a hackathon—it was a hands-on lesson in innovation.
                  </span>
                </Typography>
              </Box>
            </Grow>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
