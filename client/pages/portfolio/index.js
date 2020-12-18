import React from 'react'
import PortfolioList from '../../components/portfolio/PortfolioList'
const index = ({projects}) => {
    return (
        // <pre> {JSON.stringify(projects,null,4)}</pre>
           <PortfolioList projects={projects}/> 
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
