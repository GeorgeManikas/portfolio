import {  Grid, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TabPanel from './TabPanel'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ReactMarkdown  from 'react-markdown'
import ImageCarousel from './ImageCarousel'
const useStyles = makeStyles (theme => ({
    container:{
        padding:'1.2em',
        position:'relative'
    },    
    indicator:{
        backgroundColor:theme.palette.primary.light,
       
    },
    panel:{

    },
    tabs:{
        
        position:'relative',
        borderRadius:'10px',
        // width:'auto',
        
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
        
        "&$selected":{
            borderRight:`2px solid `
          }
    },
    tab:{
            
      "&:focus":{
          background:theme.palette.primary.dark
      }
    },
    wrapper:{
        [theme.breakpoints.up('md')]:{
            alignItems:'left',
            width:'50%',
        }
    },

    
    markdown:{
        width:'100%',
        fontSize:'1.2em',
        marginBottom:'4em',
        "& a":{
            textDecoration:'underline',
            color:'darkgray'
        },
        "&  img":{
            width:'15em !important',
            height:'15em !important',
            
            display:'inline-flex'
        },
        "& code":{
            // padding:'0.8rem',
            width:'90% !important',
            background:theme.palette.primary.dark,
            fontWeight:"800",
            borderRadius:'8px',
            padding:'0.4em 0.4em',
            fontFamily:'Courier',
            fontSize:'1.2em'
        },
        "& blockquote":{
            padding:'0.4em',
            border:`4px double #353535`,
            borderRadius:'10px',
            fontSize:'1.4rem',
            fontStyle:'italic',
            fontFamily: 'Pangolin, cursive',
            background:'rgba(0,0,0,0.6)',
            marginLeft:'0',
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
                // borderRadius:'50%',
                
            },
            "& ::after":{
                content:' "" ',
                border:`2px solid #353535`,
                position:'relative',
                bottom:'-5px',
                right:'-10px',
                width:'20px !important',
                height:'1em',
                // borderRadius:'50%',
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
        justifyContent:'flex-start',
        
        "& > img ":{
            objectFit:'cover',
            width:'50%',
            margin:'0.3em',
            borderRadius:'5px',
            oveflow:'hidden',
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
                <Tab aria-label={interest.title}    id={interest.id}   label={interest.title} className={classes.tab} classes={{ wrapper:classes.wrapper}}/>
                
            ))}
        
        </Tabs>
        </Grid>
        <Grid item xs={12} md={10}>
        {interests.map( (interest,idx) => (
            <TabPanel value={value} index={idx} className={classes.panel}>
            <div className={classes.markdown}>
                       <ReactMarkdown children={interest.description} /> 
            </div>
            
            
            <div style={{marginBottom:'5rem'}} className={classes.photos}>
             {interest.images.length !== undefined && (
                <ImageCarousel images={interest.images} /> 
              
             )
             }
            </div>
            
            </TabPanel> 
        ))}
        </Grid>
        </Grid>
    )
}

  {/* interest.images.map( image => (
                    
                     <img key={image._id} src={image.url} alt={image.name}  /> 
                )) */}
export default AboutMeTabs
