import React from 'react'
import PortfolioList from '../../components/portfolio/PortfolioList'
import { NextSeo} from 'next-seo'
const index = ({projects}) => {
    return (
        <>
        <NextSeo title="My Portfolio" description="George Manikas Portfolio" /> 
           <PortfolioList projects={projects}/> 
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
    const projects = await res.json()

    return {
        props:{
            projects
        }
    }
}

export default index
