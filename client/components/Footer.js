import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { IconButton, Link } from '@material-ui/core'
import { ArrowBackIosOutlined, GitHub, HomeRounded } from '@material-ui/icons'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
    container:{
        position:'fixed',
        bottom:0,
        height:'8vh',
        width:'100vw',
        background:theme.palette.primary.dark,
        boxShadow:theme.shadows[15]
    },
    github:{
        display:'inline-flex',
        fontSize:'1.1em',
        marginBottom:'0.6em',

    },
    box:{
        textAlign:'right',
        marginRight:'2em',
        marginBottom:'0.2em'

    },
    buttons:{
        display:'flex',
        flexDirection:'row',
        padding:'0 7em',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    icons:{
        color: theme.palette.text.primary,
        "& :hover":{
            cursor:'pointer'
        }
    }
}))

const Footer = () => {

    const classes = useStyles()
    const router = useRouter()
    return (
        <div className={classes.container}>
        <Box className={classes.buttons}>
            <IconButton onClick={() => router.back()}><ArrowBackIosOutlined className={classes.icons} /> </IconButton> 
            <IconButton onClick={() => router.push('/')}><HomeRounded   className={classes.icons} /> </IconButton> 
        </Box>
            <Box className={classes.box}>
                <Link href="https://github.com/GeorgeManikas/portfolio" target="_blank" rel="noreferrer"> <Typography variant="body2" color="textPrimary" className={classes.github}> <span style={{ marginRight:'0.2em'}}>view code for this site</span>   <GitHub />   </Typography></Link>
            </Box>
        </div>
    )
}

export default Footer
