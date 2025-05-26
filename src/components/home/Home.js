import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Typography, Stack, Tooltip } from "@mui/material";
import { info } from "../../info/Info";

// Animated floating effect keyframes (for inline sx)
const floatAnim = {
  animation: 'floatY 4s ease-in-out infinite',
  '@keyframes floatY': {
    '0%,100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' }
  }
};

// Animated pulse effect for the waving hand
const handAnim = {
  display: "inline-block",
  ml: 1,
  fontSize: "1.1em",
  animation: "waveHand 2.3s infinite",
  transformOrigin: "70% 70%",
  "@keyframes waveHand": {
    "0%": { transform: "rotate(0deg)" },
    "10%": { transform: "rotate(16deg)" },
    "20%": { transform: "rotate(-10deg)" },
    "30%": { transform: "rotate(16deg)" },
    "40%": { transform: "rotate(-4deg)" },
    "50%": { transform: "rotate(10deg)" },
    "60%,100%": { transform: "rotate(0deg)" }
  }
};

// Accent SVG blobs for playful background
const Blob = ({ color, sx }) => (
  <Box
    sx={{
      ...sx,
      position: "absolute",
      zIndex: 0,
      filter: "blur(0.5px) opacity(.13)",
      pointerEvents: "none",
      userSelect: "none",
      animation: "blobMove 13s ease-in-out infinite alternate",
      "@keyframes blobMove": {
        "0%": { transform: "scale(1) translateY(0px) translateX(0px)" },
        "100%": { transform: "scale(1.07) translateY(25px) translateX(30px)" },
      },
    }}
  >
    <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="180" cy="180" rx="180" ry="180" fill={color} />
    </svg>
  </Box>
);

export default function Home({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      component="main"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 175px)"
      id="home"
      sx={{
        background: "linear-gradient(120deg, #f7fafc 0%, #ede7fa 100%)",
        position: "relative",
        overflow: "hidden",
        py: { xs: 3, md: 8 },
      }}
    >
      {/* Animated blobs */}
      <Blob color="#a668ff" sx={{ top: -90, left: -120, width: { xs: 160, md: 260 } }} />
      <Blob color="#00ffa4" sx={{ bottom: -110, right: -90, width: { xs: 130, md: 200 } }} />

      {/* Avatar with animated gradient border and floating effect */}
      <Box
        sx={{
          background: info.gradient,
          borderRadius: "50%",
          p: "7px",
          mx: { xs: "auto", md: 0 },
          mb: { xs: 3, md: 0 },
          mr: { xs: 0, md: 7 },
          boxShadow: "0 8px 32px #00ffa425, 0 2px 8px #a668ff22",
          transition: "transform 0.45s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s",
          ":hover": {
            transform: "scale(1.13) rotate(-2deg)",
            boxShadow: "0 20px 60px #a668ff55, 0 6px 18px #00ffa455",
            filter: "brightness(1.07)",
          },
          ...floatAnim,
          '@keyframes floatY': {
            '0%,100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' }
          }
        }}
      >
        <Box
          className={Style.avatar}
          component="img"
          src={me}
          alt="Jhansi's portrait"
          width={{ xs: "29vh", md: "34vh" }}
          height={{ xs: "29vh", md: "34vh" }}
          borderRadius="50%"
          sx={{
            background: "#fff",
            objectFit: "cover",
            p: "0.5rem",
            transition: "box-shadow .3s, filter .3s",
            boxShadow: "0 2px 14px 0 #b2dfdb2c",
            filter: "grayscale(3%)",
            ":hover": {
              boxShadow: "0 8px 32px #00ffa425",
              filter: "grayscale(0%)",
            },
          }}
        />
      </Box>

      {/* Main content - open, no card or background */}
      <Box
        sx={{
          maxWidth: 590,
          ml: { xs: 0, md: 5 },
          px: { xs: 2, md: 3 },
          py: { xs: 0, md: 0 },
          borderRadius: 0,
          bgcolor: "transparent",
          boxShadow: "none",
          position: "relative",
          zIndex: 2,
          animation: "fadein 1.3s",
          "@keyframes fadein": {
            "0%": { opacity: 0, transform: "translateY(40px)" },
            "100%": { opacity: 1, transform: "translateY(0)" }
          }
        }}
      >
        {/* Animated gradient headline */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.15rem", sm: "2.6rem", md: "3.05rem" },
            mb: 1.25,
            letterSpacing: 1.8,
            lineHeight: 1.12,
            textAlign: { xs: "center", md: "left" },
            background: info.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
            transition: "letter-spacing .25s, filter .35s",
            ":hover": { letterSpacing: 5, filter: "brightness(1.1)" }
          }}
        >
          Hi, I'm {info.firstName}
          <Box
            component="span"
            className={Style.hand}
            sx={handAnim}
          >
            🤚
          </Box>
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#7e57c2",
            mb: 2,
            fontSize: { xs: "1.09rem", sm: "1.23rem", md: "1.39rem" },
            textAlign: { xs: "center", md: "left" },
            letterSpacing: ".07em",
            textShadow: "0 2px 18px #ede7fa55"
          }}
        >
          {info.position}
        </Typography>
        <Stack
          component="ul"
          direction="column"
          spacing={0.7}
          sx={{
            mb: 2.8,
            mt: 1,
            pl: { xs: 2.5, md: 2 },
            pr: 1,
            fontSize: { xs: "1.08rem", sm: "1.15rem" },
            position: "relative"
          }}
        >
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Stack>
        {/* Social icons with floating, ripple, and tooltip */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent={{ xs: "center", md: "flex-start" }}
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, my: 2, zIndex: 3, position: "relative" }}
        >
          {info.socials.map((social, index) => (
            <Tooltip key={index} title={social.label.charAt(0).toUpperCase() + social.label.slice(1)}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 48,
                  height: 48,
                  cursor: "pointer",
                  background: "rgba(250,250,255,0.91)",
                  boxShadow: "0 2px 12px #b2dfdb44",
                  transition: "transform .20s, box-shadow .20s, background .20s",
                  position: "relative",
                  overflow: "visible",
                  ":hover": {
                    transform: "translateY(-13px) scale(1.18) rotate(-5deg)",
                    background: "linear-gradient(135deg, #e0f7fa 0%, #ede7f6 100%)",
                    boxShadow: "0 10px 30px #a668ff33",
                  },
                  ":active": {
                    animation: "ripple .5s cubic-bezier(.4,0,.2,1)"
                  },
                  "@keyframes ripple": {
                    "0%": {
                      boxShadow: "0 0 0 0 #00ffa420"
                    },
                    "100%": {
                      boxShadow: "0 0 0 15px rgba(0,255,164,0)"
                    }
                  }
                }}
              >
                <SocialIcon
                  link={social.link}
                  icon={social.icon}
                  label={social.label}
                />
              </Box>
            </Tooltip>
          ))}
        </Stack>
        <Box sx={{ width: { xs: "88%", md: "64%" }, mt: 2, mx: "auto", borderBottom: "2.5px solid #e0e0e0", opacity: 0.6 }} />
        {/* Bio under a divider, still no card */}
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            fontWeight: 500,
            textAlign: { xs: "center", md: "left" },
            mt: 2.5,
            lineHeight: 1.72,
            fontSize: { xs: ".98rem", sm: "1.09rem" },
            animation: "fadeinBio 1.8s",
            "@keyframes fadeinBio": {
              "0%": { opacity: 0, transform: "translateY(30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" }
            }
          }}
        >
          {info.bio}
        </Typography>
      </Box>
    </Box>
  );
}
