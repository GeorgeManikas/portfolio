import { Box, Button, FormGroup, Grid, Input, InputLabel, Modal, Slide,Icon, Typography } from '@material-ui/core'
import React,  { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useRouter } from 'next/router'
import { ArrowBackIosRounded, ArrowForwardIosRounded, Send, Undo } from '@material-ui/icons'
const useStyle = makeStyles( theme => ({
    container:{
        width:'80%',
        position:'relative',
        margin:'auto',
        marginTop:'4em',
        marginBottom:'5em',
        top:'70%',
        background:theme.palette.primary.dark,
        borderRadius:'8px',
        padding:'3em',
        [theme.breakpoints.down('sm')]:{
            padding:'0.8em'
        }
    },
    label:{
       color:theme.palette.text.primary 
    },
    input:{
        marginBotton:'4em',
        width:'80%'
    },
    btn:{
       width:'100%',
        "&:hover":{
            boxShadow:`inset 0 0 20px ${theme.palette.primary.main}`,
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'0.8em',
            width:'100%',
            padding:'0.3em 40px'
        }
    },
    btnBack:{
        "&:hover":{
            boxShadow:`inset 0 0 20px ${theme.palette.error.main}`,
        }
    },
    btnContainer:{
        [theme.breakpoints.up('md')]:{
            width:'100%',
            justifyContent:'space-evenly'
        }
        // display:'inline-flex',
        // justifyContent:'space-between'

    },
    modal:{
        position:'absolute',
        top:'2%',
        width:'80%',
        height:'auto',
        margin:'auto',
        background:theme.palette.default,
        borderRadius:'9px',
        boxShadow:theme.shadows[3],
        [theme.breakpoints.down('sm')]:{
            position:'absolute',
            top:'0%',
            width:'110%'
        }
        
    },
    modalBox:{
        position:'relative',
        margin:'auto',
        top:'50%',
        width:'60%',
        fontSize:'4em',
        padding:'0.6em',
        border:'4px double red',
        outline:'none',
    fontFamily:'Big Shoulders Stencil Display',
    fontWeight: 900,
    textTransform:'capitalize',
    
    color:'red',
    [theme.breakpoints.up('sm')]:{
        transform:'rotate(35deg)',
        animation:` $modalAnimation 500ms linear`,
    },
    [theme.breakpoints.down("sm")]:{
        top:'10%',
        width:'80%',
        animation: ` $modalAnimationMobile 500ms linear `,
    }
    },
    '@keyframes modalAnimation':{
        "0%":{ transform:'scale(1.5) rotate(45deg)'},
        "100%":{ transform:'scale(1) rotate(45deg)'}
    },
    '@keyframes modalAnimationMobile':{
        "0%":{ transform:'scale(1.5) rotate(0)'},
        "100%":{ transform:'scale(1) rotate(0) '}
    }
}))

const ContactForm = () => {
    const classes=useStyle()
    const router = useRouter()

    useEffect(()=>{
        window.scroll({
            top:400,
            behavior:'smooth'
        })
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("name", name)
        form. append('email', email)
        form.append('text',text)
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/contact-forms`, { 
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, text
            })

        })
        const data = await res.json()
        setOpen(true)
        setTimeout(()=>{!open && router.push('/')},1000)
        
    }

    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [open,setOpen] = useState(false)
    return (
        <>
        {/* <Slide direction="up" in={true} timeout={500}> */}
        <Box className={classes.container} id="container">
        <Typography variant="h4" color="textPrimary" style={{ textAlign:'center'}}> Contact form </Typography>
        <Typography variant="h6" color="textSecondary" style={{ textAlign:'center'}}> Please write your comments, advice, suggestions etc. and I will be happy to answer!  </Typography>
        <form onSubmit={handleSubmit} style={{padding:'2em', margin:'2em'}}>
        <Grid container spacing={2} > 
        <Grid item xs={12} md={6}>
            <InputLabel htmlFor="name" className={classes.label}> Your name (optional)</InputLabel>
            <Input className={classes.input} id="name" type="text" value={name} onChange={ (e) => setName(e.target.value)}/> 
            <InputLabel htmlFor="emai" className={classes.label}> Your email address (optional)</InputLabel>
            <Input className={classes.input} id="email" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}/> 
        </Grid>
        <Grid item xs={12} md={6} >
            <InputLabel  htmlFor="text" className={classes.label} > Message </InputLabel>
            <Input variant="outlined" className={classes.input} id="text" type="text" multiline rows={8}  value={text} onChange={ (e) => setText(e.target.value)}/>
        </Grid>
        <Grid item xs={6} className={classes.btnContainer}>
        <Button  color="primary" variant="contained" style={{  marginTop:'2em'}}  type='submit' className={classes.btn} id="btn"
        endIcon={<Send  />}>   submit </Button>
        </Grid>
        <Grid item xs={6} className={classes.btnContainer}>
         
        <Button   style={{  marginTop:'2em'}}  type='submit' className={`${classes.btnBack} ${classes.btn}`} id="btn"
        startIcon={<Undo /> } onClick={() => router.back()}>   Back </Button>
        </Grid> 
        </Grid>
        </form>
        </Box>
        {/* </Slide> */}
        <Modal open={open} onClose={() => setOpen(false)} className={classes.modal}>
        <Box className={classes.modalBox}>
            Thank you for your feedback !!! 
        </Box>
        </Modal>
        </>
    )
}

export default ContactForm
