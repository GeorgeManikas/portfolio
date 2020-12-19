import React from 'react'
import AboutMeTabs from '../../components/aboutme/AboutMeTabs'
import { NextSeo } from 'next-seo'
const index = ({ interests }) => {
    return (
        <>
        <NextSeo title="About me page" description="Personal information about me" /> 
        <div>
           <AboutMeTabs interests={interests} /> 
        </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`)
    const data = await res.json()

    return {
        props:{
            interests:data
        }
    }
}
export default index
