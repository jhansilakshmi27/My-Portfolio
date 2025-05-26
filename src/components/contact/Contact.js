import React, { useRef, useState } from "react";
import { Box, Typography, Link, Stack, IconButton, TextField, Button, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_1kkcacy";
const TEMPLATE_ID = "template_iitdz42";
const PUBLIC_KEY = "es3Oa2hT_nbcJMrjt";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
      }, (error) => {
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      id="contact"
      sx={{ background: "linear-gradient(135deg,#e0e7ff 0%,#fffde4 100%)" }}
    >
      <Typography
        variant="h3"
        fontWeight={900}
        mb={2}
        color="primary"
        textAlign="center"
        letterSpacing={2}
        sx={{
          textShadow: "0px 4px 16px rgba(100, 100, 200, 0.16)",
          mb: 4
        }}
      >
        Contact Me
      </Typography>

      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 6 },
          mb: 4,
          minWidth: { xs: "98vw", sm: 500, md: 600 },
          maxWidth: 650,
          borderRadius: 6,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 8px 32px rgba(60,60,100,0.14)"
        }}
      >
        <form ref={formRef} onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <TextField
              label="Name"
              name="from_name"
              required
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "1.2rem",
                  py: 1.5,
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 1px 4px 0 rgba(60,60,100,0.04)",
                  "&:hover": {
                    boxShadow: "0 2px 8px 0 rgba(60,180,100,0.16)",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0 2px 8px 0 rgba(60,60,180,0.19)",
                  }
                }
              }}
            />
            <TextField
              label="Email"
              name="reply_to"
              type="email"
              required
              fullWidth
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "1.2rem",
                  py: 1.5,
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 1px 4px 0 rgba(60,60,100,0.04)",
                  "&:hover": {
                    boxShadow: "0 2px 8px 0 rgba(60,180,100,0.16)",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0 2px 8px 0 rgba(60,60,180,0.19)",
                  }
                }
              }}
            />
            <TextField
              label="Message"
              name="message"
              required
              fullWidth
              multiline
              minRows={5}
              variant="outlined"
              InputProps={{
                sx: {
                  fontSize: "1.2rem",
                  py: 1.5,
                  transition: "box-shadow 0.2s",
                  boxShadow: "0 1px 4px 0 rgba(60,60,100,0.04)",
                  "&:hover": {
                    boxShadow: "0 2px 8px 0 rgba(60,180,100,0.16)",
                  },
                  "&.Mui-focused": {
                    boxShadow: "0 2px 8px 0 rgba(60,60,180,0.19)",
                  }
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={submitted}
              sx={
                submitted
                  ? {
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      py: 2,
                      borderRadius: 3,
                      boxShadow: "0 4px 16px rgba(76,175,80,0.12)",
                      transform: "scale(1.03)",
                      transition: "all 0.2s",
                      "&.Mui-disabled": {
                        backgroundColor: "#4caf50",
                        color: "#fff",
                        opacity: 1
                      }
                    }
                  : {
                      background: "linear-gradient(90deg,#1976d2 0%,#42a5f5 100%)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      py: 2,
                      borderRadius: 3,
                      boxShadow: "0 4px 16px rgba(33,150,243,0.12)",
                      transition: "all 0.2s",
                      "&:hover": {
                        background: "linear-gradient(90deg,#42a5f5 0%,#1976d2 100%)",
                        transform: "scale(1.06)"
                      }
                    }
              }
            >
              {submitted ? "Thank You!" : "Send Message"}
            </Button>
          </Stack>
        </form>
      </Paper>

      <Typography variant="h6" mb={1} color="textSecondary" textAlign="center">
        Or reach out directly:
      </Typography>
      <Stack direction="row" spacing={3} mb={2} justifyContent="center">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/jhansi-matcha-9b0258278"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="LinkedIn"
          sx={{
            transition: "transform 0.15s",
            "&:hover": { transform: "scale(1.18)", color: "#0077b5" }
          }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:jhansimatcha737@gmail.com"
          color="error"
          aria-label="Email"
          sx={{
            transition: "transform 0.15s",
            "&:hover": { transform: "scale(1.18)", color: "#c62828" }
          }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/919347535113"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#25D366",
            transition: "transform 0.15s",
            "&:hover": { transform: "scale(1.18)", color: "#128c7e" }
          }}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography
        variant="body1"
        color="textSecondary"
        textAlign="center"
        maxWidth={500}
        mb={2}
      >
        <Link
          href="mailto:jhansimatcha737@gmail.com"
          color="inherit"
          underline="hover"
        >
        </Link>
        <br />
        <Link
          href="https://www.linkedin.com/in/jhansi-matcha-9b0258278"
          color="inherit"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
        </Link>
        <br />
        <Link
          href="https://wa.me/919347535113"
          color="inherit"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
        </Link>
      </Typography>
    </Box>
  );
};

export default Contact;
