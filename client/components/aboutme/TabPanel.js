import { Typography } from '@material-ui/core'
import React from 'react'

const TabPanel = ({ children , value, index, ...other}) => {
    return (
        <div role="tabpanel"
            hidden={value !== index }
            id = {`vertical-tab-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>

            { value === index && (
               <p> {children}</p>
            )}
        </div>
    )
}

export default TabPanel
