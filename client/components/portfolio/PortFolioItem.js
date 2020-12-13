import React from 'react'
import { Card, CardHeader, CardContent,  Box, Grid, Typography, CardActionArea, CardActions, Link, Hidden, Divider } from '@material-ui/core'
import { GitHub, Web } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
    container : {
        margin:'2em'
    },
    card:{
        borderRadius:'10px',
        background : '#353535',
        "&:hover":{
            boxShadow:theme.shadows[17],
            animation: ` $animateCard  1000ms linear `,
            animation: ` $skewCard 500ms ease-in `


        }

    },
    "@keyframes animateCard":{
        "0%":{ background : '#353535'},
        "100%":{background:theme.palette.primary.dark}
    },
    "@keyframes skewCard":{
        "0%": { transform: 'rotate(-.2deg)'},
        "25%": { transform: 'rotate(-0deg)'},
        "50%": { transform: 'rotate(.2deg)'},
        "75%": { transform: 'rotate(0.1deg)'},
        "100%":{transform:'rotate(0)'}
    },
    sandbox:{
        width:'100%',
        height:'300px',
        border:'none',
        boxShadow:theme.shadows[6],
        overflow:'hidden'
    },
    description:{
        padding:'2em'
    },
    link:{
        color:'white',
        padding:'0.3em',
        paddingLeft:'1em',
        fontSize:'1.6em',
        textDecoration:'none'
    },
    title:{
        fontFamily:'Open Sans Condensed', 
        letterSpacing:'0em', 
        fontSize:'30px'
    }
}))

const PortFolioItem = ({project}) => {

    const classes = useStyles()
    return (
        <>
        <Box className={classes.container}>
            <Card className={classes.card} raised>
                <CardHeader title={project.short_description} className={classes.title}/> 
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={6}> 
                            <iframe src={project.sandbox_url} className={classes.sandbox} style={{padding:'0.8em' }} />
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.description}>
                            <Typography variant="body1" style={{marginBottom:'1em', fontFamily:'Open Sans Condensed', fontSize:'18px', lineHeight:'1.75em', letterSpacing:'0.1em'}}> {project.description} </Typography>
                        </Grid>
                            <CardActionArea>
                                <CardActions >
                                    <Grid item xs={6}>
                                        <Link href={project.github_url} target="_blank" rel="noreferrer" className={classes.link}> <GitHub />  Github </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href={project.sandbox_url} target="_blank" rel="noreferrer" className={classes.link}> <Web /> Web </Link>
                                    </Grid>
                                </CardActions>
                            </CardActionArea>
                        
                    </Grid>
                </CardContent>
            </Card>

        </Box>
            <Hidden mdUp>
                <Divider /> 
            </Hidden>
            </>
    )
}

export default PortFolioItem
{/* // mongodb+srv://georman:<password>@portfolio.rbiwu.mongodb.net/<dbname>?retryWrites=true&w=majority */}