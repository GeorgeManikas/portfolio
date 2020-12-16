import React, { useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import ReactMarkdown  from 'react-markdown'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core'
import { ExpandMoreRounded } from '@material-ui/icons'

const useStyles = makeStyles ( theme => ({
    root: {
        width:'90%',
        margin:'auto',
        marginBottom:'4em'
    },

    accordion:{
        background:'transparent',
        borderLeft:`5px solid ${theme.palette.primary.dark}`,
        margin:'2em',
        
      
    },
    summary:{
      
    },
    details:{
        fontSize:'1em'
    },
    markdown:{
        width:'100%',
        fontSize:'1.1em',
        "& a":{
            textDecoration:'none',
            color:theme.palette.primary.light
        },
        "& code":{
            // padding:'0.8rem',
            width:'90% !important',
            background:theme.palette.primary.dark,
            borderRadius:'8px'
        },
        "& blockquote":{
            fontSize:'1.3rem',
            fontStyle:'italic',
            "& strong":{
                border:'none'
            },
            "& ::before":{
                content:'""',
                border:`3px solid ${theme.palette.primary.dark}`,
                position:'relative',
                top:'-5px',
                left:'-10px',
                width:'20px !important',
                height:'1em',
                borderRadius:'50%',
                
            }
        },
        "& img":{
            width:'12rem',
            height:'12rem',
            objectFit:'cover'
        }
    },
    icons:{
        color:theme.palette.text.primary
    },
    imageContainer:{
        padding:'1em',
        margin:'auto',
        width:'70%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        objectFit:'cover'
    }
}))
const HobbiesStepper = ({ interests }) => {



    const [ expanded, setExpanded ] = useState(false)
    const classes=useStyles()

    function getPosition(element) {
        var e = document.getElementById(element);
        var left = 0;
        var top = 0;

        do {
            left += e.offsetLeft;
            top += e.offsetTop;
        } while (e = e.offsetParent);

        return [left, top];
    }

   

    const handleChange = (panel) => (event, isExpanded) => {
       
        setExpanded(isExpanded ? panel : false);
        // window.scrollTo(getPosition(panel))

      };
    return (
       <div className={classes.root}>
           {interests.map( interest => (
               <Accordion key={interest.id} id={`panel-${interest.id}`} className={classes.accordion}  onChange={() => handleChange(`panel-${interest.id}`)}>
                   <AccordionSummary className={classes.summary} expandIcon={<ExpandMoreRounded className={classes.icons} /> } aria-controls={interest.title} id={`panel-${interest.title}`}>
                     <Typography variant="h5" color="textPrimary" className={classes.title}> {interest.title} </Typography>
                   </AccordionSummary>
                   <AccordionDetails className={classes.details}>
                       <div className={classes.markdown}>
                       <ReactMarkdown children={interest.description} /> 
                       </div>
                       
                   </AccordionDetails>
                   <Grid container spacing={2} className={classes.imageContainer}> 
                        {interest.images.map( image => (
                            <Grid item key={image.provider_metadata.public_id} xs={12} md={6}>
                                <img src={image.formats.thumbnail.url} alt={image.name} className={classes.image} /> 
                            </Grid>
                        ))}
                       </Grid>
               </Accordion>
           ))}
       </div>
    )
}

export default HobbiesStepper
