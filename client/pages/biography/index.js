import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/styles'
import { Zoom } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    md:{
        position:'relative',
        width:'90%',
        margin:'auto',
        fontFamily:"Open Sans Condensed",
        letterSpacing:'0.03em',
        fontSize:'1.3em',
        "& pre":{
            // padding:'2em',
            padding:'0.3em',
        
            borderRadius:'8px',
            border:'1px solid #000000',
            background: '#00091c',
            opacity:'0.7',
            boxShadow : theme.shadows[10]
        }
    }
}))
const index = ({ biography, bioExists }) => {
    const classes= useStyles();
    const [ open, setOpen ] = useState(false)

    
    return (
        <Zoom in={bioExists} timeout={600}>
        <div  className={classes.md}>
        <ReactMarkdown children={biography[0].biography} />
        </div>
        </Zoom>
    )
}


export const getServerSideProps = async () => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/biographies`)
    const data = await res.json()
    return {
        props : {
            biography:data,
            bioExists : true
        }
    }
}   
export default index
