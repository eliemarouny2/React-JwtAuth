import React from 'react'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return(
        <div style={{position: 'fixed', bottom: '0px', paddingTop: '10px',
                     paddingBottom: '10px', width: '100%', textAlign: 'center', backgroundColor: 'white'}}>
            <Typography>
            &copy; Resto-Elie Marouny-Joseph Fleyhan
            </Typography>
        </div>
    )
}
export default Footer