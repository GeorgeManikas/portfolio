import {  Grid, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TabPanel from './TabPanel'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ReactMarkdown  from 'react-markdown'

const useStyles = makeStyles (theme => ({
    container:{
        padding:'1.2em',
    },    
    indicator:{
        backgroundColor:theme.palette.primary.light,
       
    },
    panel:{

    },
    tabs:{
        
        position:'relative',
        borderRadius:'10px',
        width:'auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
        // padding:'1em',
        // justifyContent:'center',
        // alignItems:'center',
        "&$selected":{
            borderRight:`2px solid `
          }
    },
    tab:{
      "&:focus":{
          background:theme.palette.primary.dark
      }
    },
    title:{

    },
    markdown:{
        width:'100%',
        fontSize:'1.1em',
        marginBottom:'4em',
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
                background:'red !important',
                width:'100px',
                height:'100px',
                // border:`2px solid ${theme.palette.primary.dark}`,
                position:'relative',
                top:'-5px',
                left:'-10px',
                width:'20px !important',
                height:'1em',
                borderRadius:'50%',
                
            },
            "& ::after":{
                content:' "" ',
                border:`2px solid ${theme.palette.primary.dark}`,
                position:'relative',
                bottom:'-5px',
                right:'-10px',
                width:'20px !important',
                height:'1em',
                borderRadius:'50%',
            }
        },
        "& img":{
            width:'8rem',
            height:'8rem',
            objectFit:'cover'
        },
        
    },
    photos:{
        display:'flex',
        width:'100%',
        flexWrap:'wrap',
        position:'relative',
        justifyContent:'center',
        "& > img ":{
            objectFit:'cover',
            width:'50%',
            [theme.breakpoints.up('md')]:{
                width:'30%',

            }
        },
    }
}))
const AboutMeTabs = ({ interests}) => {
    const tabletAndUp = useMediaQuery('(min-width:600px)');
    const [ value, setNewValue  ] = useState(0)
    const tabsLength = interests.length
    const handleChange = (e, newValue) => {
        console.log('NEW V : ', newValue)
        setNewValue(newValue)
    }

    const classes = useStyles()

    if (!interests) return null
    return (
        <Grid container spacing={4} className={classes.container} >
        <Grid item xs={12} md={2}>
        <Tabs value={value} onChange={handleChange}  indicatorColor="primary"  orientation={`${tabletAndUp ? "vertical": ''}`}   className={classes.tabs} classes={{ indicator: classes.indicator}} >
            { interests.map( (interest,idx) => (
                <Tab aria-label={interest.title}    id={interest.id}   label={interest.title} className={classes.tab} />
                
            ))}
        
        </Tabs>
        </Grid>
        <Grid item xs={12} md={10}>
        {interests.map( (interest,idx) => (
            <TabPanel value={value} index={idx} className={classes.panel}>
            <Typography variant="h5" color="textPrimary" className={classes.title}> {interest.title} </Typography>
            <div className={classes.markdown}>
                       <ReactMarkdown children={interest.description} /> 
            </div>
            
            
            <div style={{marginBottom:'5rem'}} className={classes.photos}>
             {interest.images.length !== undefined && (
             
                interest.images.map( image => (
                    
                     <img key={image._id} src={image.url} alt={image.name}  /> 
                ))
             )
             }
            </div>
            
            </TabPanel> 
        ))}
        </Grid>
        </Grid>
    )
}

export default AboutMeTabs
