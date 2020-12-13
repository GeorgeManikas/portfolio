import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import SingleButton from "./SingleButton";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    
    margin: "auto",
    marginTop:'2em',
    display:'flex',
    justifyContent:'center',
    width:'80%',
    [theme.breakpoints.down('lg')]:{
      width:'90%'
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop:'2em'
      
    }
  }
}));

const ButtonMenu = ({ menu }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {menu.map((menuItem) => (
        <SingleButton key={menuItem.id} caption={menuItem.description} url={menuItem.url} />
      ))}
    </Box>
  );
};

export default ButtonMenu;
