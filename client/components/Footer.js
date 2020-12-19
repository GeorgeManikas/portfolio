import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { IconButton, Link, Toolbar ,AppBar} from '@material-ui/core'
import { ArrowBackIosOutlined, GitHub, HomeRounded } from '@material-ui/icons'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
    appbar:{
        bottom:0,
        top:'auto',
        padding:'0.2em',
        width:'100vw',
        boxShadow:theme.shadows[15],
        display:'flex',
        justifyContent:'space-center',
        background: `linear-gradient( #353535,${theme.palette.primary.dark}, ${theme.palette.primary.dark}  )`
       

    },
    github:{
        flexGrow:1,
        "& :hover":{
            cursor:'pointer',
            color:theme.palette.text.secondary
        }
    },
    box:{
        display:'flex',
        justifyContent:'flex-start',
        textAlign:'right',
        marginRight:'1em',
        

    },
   
    icons:{
        color: theme.palette.text.primary,
        "& :hover":{
            cursor:'pointer',
            color:theme.palette.text.secondary
        }
    }
}))

const Footer = () => {

    const classes = useStyles()
    const router = useRouter()
    return (
        <>
        <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.box}>
            <IconButton onClick={() => router.push('/')}><HomeRounded   className={classes.icons} /> </IconButton> 
            <Link href="https://github.com/GeorgeManikas/portfolio" target="_blank" rel="noreferrer" className={classes.github}> <Typography variant="body2" color="textPrimary" > <span style={{ marginRight:'0.2em'}}>view code for this site</span>   <GitHub />   </Typography></Link>
            {/* <Box className={classes.box}>
            </Box> */}
        </Toolbar>
        </AppBar >
        </>
    )
}

export default Footer
