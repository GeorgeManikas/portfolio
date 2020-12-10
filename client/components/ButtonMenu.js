import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import SingleButton from "./SingleButton";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%"
    }
  }
}));

const ButtonMenu = () => {
  const menu = ["bio", "about me", "portfolio", "contact "];
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {menu.map((menuItem) => (
        <SingleButton key={menuItem} caption={menuItem} />
      ))}
    </Box>
  );
};

export default ButtonMenu;
