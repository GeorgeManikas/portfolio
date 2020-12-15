import React from 'react'
import HobbiesStepper from '../../components/aboutme/HobbiesStepper'

const index = ({ interests }) => {
    return (
        <div>
           {/* <pre> {JSON.stringify(interests,null,4)}</pre> */}
           <HobbiesStepper interests={interests} />
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/interests`)
    const data = await res.json()

    return {
        props:{
            interests:data
        }
    }
}
export default index
