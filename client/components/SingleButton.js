import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "45%",
    height: "30%",
    padding: "3em",
    border: "none",
    letterSpacing: "0.8em",
    fontSize: "2em",
    fontWeight: 500,
    textTransform:'capitalize',
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
    position:'relative',
    animation: `$buttonClicked 2000ms ${theme.transitions.easing.easeOut}`
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
    "0%": {
      transform: 'translate(0,0)',
      borderRadius:'50%'
    },
    "100%": {
      transform: 'translate(0,-200%)',
      borderRadius:'0'
    }
  }
}));

const SingleButton = ({caption}) => {

  const router = useRouter()

  

  const [clicked, setClicked] = useState(false);
  const [ linkChosen, setLinkChosen] = useState(false)
  const classes = useStyles();
  const handleClick = () => {
    setClicked(!clicked)
    setTimeout(()=>{

      router.push(`/${caption.replace(' ','')}`)
    },2000)
}
  return (
    
      <Button
        className={`${classes.root} ${clicked ? classes.btnClicked: ''} ${linkChosen ? classes.linkChosen : ''}`}
        variant="outlined"
        onClick={ handleClick}
        style={{ borderRadius:'50%', borderLeft:'1px solid blue'}}
      >
        {caption}
      </Button>
  );
};

export default SingleButton;
