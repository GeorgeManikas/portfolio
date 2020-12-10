import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "45%",
    height: "30%",
    padding: "3em",
    border: "none",
    letterSpacing: "0.8em",
    fontSize: "2em",
    fontWeight: 800,
    margin: "0.2em",
    boxShadow: theme.shadows[17],
    [theme.breakpoints.down("md")]: {
      fontSize: "1em"
    },

    "&:hover": {
      animation: `$hoverAnimation 2000ms ${theme.transitions.easing.easeIn}`
    }
  },
  btnClicked: {
    animation: `buttonClicked 2000ms ${theme.transitions.easing.easeOut}`
  },
  "@keyframes hoverAnimation": {
    "0%": {
      transform: "rotateY(0deg)"
    },
    "100%": {
      transform: "rotateY(360deg)"
    }
  },
  "@keyframes buttonClicked": {
    "0": {
      color: "red"
    },
    "100%": {
      color: "green"
    }
  }
}));

const SingleButton = (props) => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  return (
    <Link href={`/${props.caption.replace(" ", "")}`}>
      <Button
        className={`${classes.root} ${clicked ? "btnClicked" : ""}`}
        variant="outlined"
        onClick={() => setClicked(!clicked)}
      >
        {props.caption}
      </Button>
    </Link>
  );
};

export default SingleButton;
