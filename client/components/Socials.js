import React, { useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import { Box, Button, Grow, Link, Slide } from "@material-ui/core";
import {
  Facebook,
  Twitter,
  Email,
  LinkedIn,
  GitHub,
  ArrowForwardIosRounded,
  ArrowDownwardRounded
  
} from "@material-ui/icons";
import { blue } from "@material-ui/core/colors";
import clsx from "clsx";
// styling
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "40%",
    width:'50px',
    zIndex:100
    // transform: "translateY(-50%)",
  },
  wrapperSmallScreen : { 
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    
    top: "10%",
    left:'12%',
    width:'50px',
    zIndex:100,
    "& $buttons":{
      justifyContent:'flex-start'
    }
  },

  buttons: {
    padding: "0.5em",
    marginLeft: 0,
    border: "1px solid #fff",
    borderRadius: "8px",
    display:'flex',
    cursor:'pointer',
    "&:hover": {
      width: "190%",
      transition: `width  2000 ${theme.transitions.easing.easeInOut}`,
      justifyContent:'flex-end'
    }
  },
  icons: {
    padding: 0,
  }
}));
const Socials = ({isMobile}) => {
  const [socialsOpen, setSocialsOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Slide in={socialsOpen} direction={`${isMobile ? 'down' : 'right' }`} className={` ${isMobile ? classes.wrapperSmallScreen : classes.wrapper }`} >
        <Box
          // className={`${classes.wrapper} `}
          onMouseLeave={() => setSocialsOpen(!socialsOpen)}
        >
            <Link
              href="https://www.facebook.com/george.manikas.1a/"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
          <Box className={classes.buttons} style={{ background: blue[600] }}>
              {" "}
              <Facebook />
          </Box>
            </Link>{" "}
            <Link
              href="https://github.com/GeorgeManikas"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
          <Box
            className={classes.buttons}
            style={{ background: "transparent" }}
          >
           
              {" "}
              <GitHub />{" "}
          </Box>
            </Link>{" "}
            <Link
              href="https://twitter.com/geor_m"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
          <Box className={classes.buttons} style={{ background: blue[300] }}>
              {" "}
              <Twitter />{" "}
          </Box>
            </Link>{" "}
            <Link
              href="mailto:georman@outlook.com.gr"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
          <Box className={classes.buttons} style={{ background: "darkgray" }}>
              {" "}
              <Email />{" "}
          </Box>
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/in/george-manikas-004103124/"
              color="inherit"
              target="_blank"
              rel="noreferrer"
            >
          <Box className={classes.buttons} style={{ background: blue[900] }}>
            {" "}
              {" "}
              <LinkedIn />{" "}
          </Box>
            </Link>{" "}
        </Box>
      </Slide>
      <Box
        className={` ${isMobile ? classes.wrapperSmallScreen : classes.wrapper }`}
        style={{
          display: `${socialsOpen ? "none" : "flex"}`,
          cursor: "pointer",
        }}
        onMouseEnter={() => setSocialsOpen(!socialsOpen)}
      >
        <Button onClick={() => setSocialsOpen(!socialsOpen)}>
         { isMobile ? <ArrowDownwardRounded fontSize="large" /> : <ArrowForwardIosRounded fontSize="large" /> } 
        </Button>
      </Box>
    </>
  );
};

export default Socials;
