import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { config, useSpring, animated } from "react-spring";
// styling
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    padding: "0.1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "auto",
    "&::after": {
      content: '""',
      opacity: "0.3",
      border: "1px solid white",
      width: "130px",
      marginBottom: "3em"
    }
  },
  title: {
    margin: "auto",
    textAlign: "center",
    letterSpacing: "-0.1em",
    lineHeight: "3em",
    fontWeight: 800,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
      letterSpacing: "0.1em"
    }
  },
  subtitle: {
    marginTop: "0.3em",
    marginBottom: "1em",
    letterSpacing: "0.6em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
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
      <Typography className={classes.title} variant="h3" color="initial">
        <animated.div style={titleTransition}>George Manikas</animated.div>
      </Typography>
      <Typography variant="h4" color="initial" className={classes.subtitle}>
        <animated.div style={subTitleTransition}>
          Frontend Enthusiast{" "}
        </animated.div>
      </Typography>
    </Box>
  );
};

export default Initials;
