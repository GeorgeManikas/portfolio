import React, { useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import { StepContent, StepLabel, Step, Button, StepButton, Box, GridList, Grid, GridListTile } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ReactMarkdown  from 'react-markdown'
import { InfoRounded} from '@material-ui/icons'

const useStyles = makeStyles ( theme => ({
    stepper:{
        background:theme.palette.background.default,
        margin:'2em'
    },
    step:{
        cursor:'pointer',
        background:theme.palette.primary.dark,
        padding:'0.8em'
    },
    markdown:{
        "& a":{
            textDecoration:'none',
            color:theme.palette.primary.light
        },
        "& code":{
            padding:'0.8rem',
            background:theme.palette.primary.dark,
            borderRadius:'8px'
        }
    }
}))
const HobbiesStepper = ({ interests }) => {



    const [ activeStep, setActiveStep ] = useState(0)
    const noOfSteps = interests.length

    const classes=useStyles()
    return (
        <div>
        {/* <pre> {JSON.stringify(interests,null,4)} </pre> */}
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
            {interests.map( (interest,idx) => (
                <Step  key={interest.id}  >
                <StepLabel StepIconComponent={InfoRounded} className={classes.step} onClick={() => setActiveStep(idx)}>  {interest.title} </StepLabel>
                <StepContent > 
                    <Box className={classes.markdown}>
                       <ReactMarkdown children={interest.description} /> 
                       <GridList cols={3} cellHeight={'auto'} >
                       {interest.images.map( img => ( 
                           <GridListTile>
                           <img src={img.formats.thumbnail.url} style={{ position:'relative', width:'100%', transform:'rotate(-90deg) scale(0.5)', objectFit:'contain' }} /> 
                           </GridListTile>))}


                       </GridList>
                    </Box>
                </StepContent>
                </Step>
            ))}
            </Stepper>
        </div>
    )
}

export default HobbiesStepper
