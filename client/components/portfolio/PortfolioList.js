import { Fade, Grid, Slide, Zoom } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import PortFolioItem from './PortFolioItem'

const useStyles = makeStyles(theme => ({
    container:{
        // position:'relative',
        marginTop:'7em',
        width:'90%',
        margin:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    }
}))


const PortfolioList = ({ projects }) => {

    const classes = useStyles()
    return (
        <Slide in={true} direction="right" timeout={400}>
        <Grid container spacing={2} justify="center" alignItems="stretch" className={classes.container}>
            {projects.map( project => (
            <Grid item xs={12} lg={6} key={project.id}>
                <PortFolioItem key={project.id} project={project} />
            </Grid>
            ))}

        </Grid>
        </Slide>
        
    )
}

export default PortfolioList

// title="Simple questionaire using styled components (forked)"
// allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
// sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"