import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { config, useSpring, animated } from "react-spring";
// styling
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    padding: "0.2em",
    top:'0',
    display:'flex',
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    margin: "auto",
    
    
    
    [theme.breakpoints.down('md')]:{
      marginTop:'0.4em'
    },
    "&::after": {
      content: '""',
      opacity: "0.1",
      border: "1px solid white",
      width: "90%",
      
    }
  },
  title: {
    margin: "auto",
    textShadow:'-1px 1px 30px blue',
    textAlign: "center",
    letterSpacing: "0.1em",
    lineHeight: "2em",
    fontSize:'3.75rem',
    fontFamily:'Big Shoulders Stencil Display',

    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      letterSpacing: "0.1em"
    }
  },
  subtitle: {
    marginTop: "0.3em",
    marginBottom: "1em",
    letterSpacing: "0.1em",
    textAlign:'center',
    [theme.breakpoints.down("sm")]: {
      fontFamily:'DM Sans',
      fontSize: "1em",
      marginTop:'0',
      letterSpacing: "0.8em"
    }
  }
}));

const Initials = () => {
  // transitions using react-spring
  // title
  const titleTransition = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
    config: config.molasses,
    config: { duration: 3000 }
  });
  // subheader
  const subTitleTransition = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
    config: config.molasses,
    config: { delay: 3000, duration: 3000 }
  });

  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title} variant="h1" color="initial">
        <animated.div style={titleTransition}>George Manikas</animated.div>
      </Typography>
      <Typography variant="h2" color="initial" className={classes.subtitle}>
        <animated.div style={subTitleTransition}>
          Frontend Enthusiast{" "}
        </animated.div>
      </Typography>
    </Box>
  );
};

export default Initials;
