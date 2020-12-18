import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    width: "55%",
    padding: "2em",
    border: "none",
    borderRadius:'50%',
    letterSpacing: "0.1rem",
    fontSize: "1.25rem",
    fontWeight: 400,
    textTransform:'capitalize',
    margin: "0.2em",
    
    boxShadow: theme.shadows[17],
    [theme.breakpoints.down("md")]: {
      width:'80%',
      margin:'0.25rem',
      marginBottom:'1.4em',
      fontSize: "1em",
      letterSpacing:'0.1rem',
      borderRadius:'50%'
    },

    "&:hover": {
      // background:theme.palette.primary.light,
      boxShadow:`inset 0 0 20px ${theme.palette.primary.main}`,
      animation: `$hoverAnimation 1000ms linear alternate infinite`
    },
    
    
  },
  btnClicked: {
    position:'relative',
    animation: `$buttonClicked 1000ms ${theme.transitions.easing.easeInOut}`
  },
  linkChosen:{
    background:'red'
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
      transform: 'translate(0,-50%)',
      borderRadius:'0',
      opacity:0
    }
  }
}));

const SingleButton = ({caption, url }) => {

  const router = useRouter()

  

  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setClicked(!clicked)
    router.push(url)
}
  return (
    
      <Button
        className={`${classes.root} ${clicked ? classes.btnClicked: ''}   `}
        variant="outlined"
        onClick={ handleClick}
        
      >
        {caption}
      </Button>

  );
};

export default SingleButton;
