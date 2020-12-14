import React, { useState}  from "react";
import { makeStyles } from '@material-ui/styles'
import Link from '@material-ui/core/Link'
import { Fade, Hidden, Typography } from "@material-ui/core";
import Socials from "./Socials";
const imgStyle = {
  borderRadius: "50%",
  marginTop: "2em",
  
};

const useStyle =  makeStyles( theme => ({
    container : { 
        display: "flex",
        justifyContent:'center',
        alignItems: "center",
        marginBottom:0,
    },
    image : {
      borderRadius: "50%",
      marginTop: "1em",
      transform:'scale(1)',
      marginBottom:'-2.75rem',
      transform:'scale(0.8)'
    }
}))

const ProfilePic = () => {
  const [ openSocial , setOpenSocial ] = useState(false)
  const classes = useStyle()
  return (
    <div className={classes.container}>
    <Link href="/">
      <img
        onMouseEnter={ () => {setOpenSocial(true)}}
        onMouseLeave={ () => setOpenSocial(false)}
        src="https://scontent.fskg3-1.fna.fbcdn.net/v/t1.15752-9/131016012_193366945835907_6781929221458942389_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=HmSyJtroIVMAX9b-MJ4&_nc_ht=scontent.fskg3-1.fna&oh=51b124208d267f3088271e0ccc30d3c2&oe=5FFC910B"
        alt="George Manikas"
       className={classes.image}
      />
      </Link>
      
      <Hidden mdUp>
      <Fade in={openSocial}>
        <Socials isMobile="true"/> 
      </Fade>
      </Hidden>
    </div>
  );
};

export default ProfilePic;
