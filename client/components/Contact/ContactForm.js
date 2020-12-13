import { Box, Button, FormGroup, Grid, Input, InputLabel, Modal, Typography } from '@material-ui/core'
import React,  { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useRouter } from 'next/router'
const useStyle = makeStyles( theme => ({
    container:{
        width:'80%',
        position:'relative',
        margin:'auto',
        marginTop:'7em',
        background:'gray',
        borderRadius:'8px',
        padding:'3em',
        [theme.breakpoints.down('sm')]:{
            padding:'0.8em'
        }
    },
    label:{
        
    },
    input:{
        marginBotton:'4em',
        width:'80%'
    },
    btn:{
        "&:hover":{
            boxShadow:`inset 0 0 20px ${theme.palette.primary.main}`,
        }
    },
    modal:{
        position:'absolute',
        top:'30%',
        width:'70%',
        height:'30%',
        margin:'auto',
        background:theme.palette.default,
        borderRadius:'9px',
        boxShadow:theme.shadows[3],
        
    },
    modalBox:{
        transform:'rotate(35deg)',
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
    animation:` $modalAnimation 500ms linear`,
    color:'red',
    },
    '@keyframes modalAnimation':{
        "0%":{ transform:'scale(1.5) rotate(45deg)'},
        "100%":{ transform:'scale(1) rotate(45deg)'}
    }
}))

const ContactForm = () => {
    const classes=useStyle()
    const router = useRouter()
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
        <Box className={classes.container}>
        <Typography variant="h4" color="textPrimary" style={{ textAlign:'center'}}> Contact form </Typography>
        <Typography variant="h6" color="textSecondary" style={{ textAlign:'center'}}> comments, advices , anything you'd want, and I'll answer asap !  </Typography>
        <form onSubmit={handleSubmit} style={{padding:'2em', margin:'2em'}}>
        <Grid container spacing={1} > 
        <Grid item xs={12} md={6}>
            <InputLabel htmlFor="name" className={classes.label}> Your name (optional)</InputLabel>
            <Input className={classes.input} id="name" type="text" value={name} onChange={ (e) => setName(e.target.value)}/> 
            <InputLabel htmlFor="emai" className={classes.label}> Your email address (optional)</InputLabel>
            <Input className={classes.input} id="email" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}/> 
        </Grid>
        <Grid item xs={12} md={6} >
            <InputLabel htmlFor="text" className={classes.label} > your subject ? </InputLabel>
            <Input className={classes.input} id="text" type="text" multiline rows={8}  value={text} onChange={ (e) => setText(e.target.value)}/>
        </Grid>
        <Grid item xs={12}>
        <Button style={{display:'block',  marginTop:'2em'}} fullWidth type='submit' className={classes.btn}> submit </Button>
        </Grid>
        </Grid>
        </form>
        </Box>
        <Modal open={open} onClose={() => setOpen(false)} className={classes.modal}>
        <Box className={classes.modalBox}>
            Thank you for your feedback !!! 
        </Box>
        </Modal>
        </>
    )
}

export default ContactForm
