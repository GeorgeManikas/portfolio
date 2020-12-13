import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    width: "55%",
    height: "30%",
    padding: "3em",
    border: "none",
    letterSpacing: "0.1em",
    fontSize: "2em",
    fontWeight: 500,
    textTransform:'capitalize',
    margin: "0.2em",
    boxShadow: theme.shadows[17],
    [theme.breakpoints.down("md")]: {
      fontSize: "1em"
    },

    "&:hover": {
      // background:theme.palette.primary.light,
      boxShadow:`inset 0 0 20px ${theme.palette.primary.main}`,
      animation: `$hoverAnimation 1000ms linear alternate infinite`
    }
  },
  btnClicked: {
    position:'relative',
    animation: `$buttonClicked 1000ms ${theme.transitions.easing.easeOut}`
  },
 
  "@keyframes hoverAnimation": {
    "0%": {
      transform:'skew(0)',
      letterSpacing:'0.1em'
    },
    "50%": {
      transform: "skew(5deg,5deg)",
      letterSpacing:'0.3em'
    },
    "100%":{
      transform:'skew(-5deg,-5deg)',
      letterSpacing:'-0.2em'
    }
  },
  // animation when button clicks 
  "@keyframes buttonClicked": {
    "0%": {
      transform: 'translate(0,0)',
      borderRadius:'50%',
      opacity:1
    },
    "100%": {
      transform: 'translate(0,-200%)',
      borderRadius:'0',
      opacity:0
    }
  }
}));

const SingleButton = ({caption, url }) => {

  const router = useRouter()

  

  const [clicked, setClicked] = useState(false);
  const [ linkChosen, setLinkChosen] = useState(false)
  const classes = useStyles();
  const handleClick = () => {
    setClicked(!clicked)
    setTimeout(()=>{

    },800)
    router.push(url)
}
  return (
    
      <Button
        className={`${classes.root} ${clicked ? classes.btnClicked: ''} `}
        variant="outlined"
        onClick={ handleClick}
        
        style={{ borderRadius:'50%', borderLeft:'2px solid gradient(blue,cyan)'}}
      >
        {caption}
      </Button>

  );
};

export default SingleButton;
