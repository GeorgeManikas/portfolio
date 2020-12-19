import React, { useState, useRef, useEffect } from 'react'
import Carousel  from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
    images :{
        boxShadow:theme.shadows[16],
        width:'40em',
        height:'40em',
        borderRadius:'8px',
        overflow:'hidden',
        [theme.breakpoints.down('md')]:{
            width:'90vw',
            height:'30em',
        }
    },
    indicators:{
        [theme.breakpoints.down('md')]:{
            width:'90vw'
        },
        width:'40em',
        
    }
}))

const ImageCarousel = ({images}) => {

    const classes = useStyles()
        
    return (
        <div className={classes.container}>
                <Carousel indicators={true} animation="fade" fullHeightHover="true" indicatorContainerProps={{ className:classes.indicators}}>
            { images.map( (image,idx) => (
                    <img key={idx} src={image.url} alt={image.name} className={classes.images} /> 
            ))}
                </Carousel>
        </div>
               
    )
}

export default ImageCarousel
