import React from 'react'
import ContactForm from '../../components/Contact/ContactForm'
import { NextSeo} from 'next-seo'
const index = () => {
    return (
        <>
        <div>
        <NextSeo title="contact from" description="contact form page"/>
           <ContactForm />   
        </div>
        </>
    )
}

export default index
