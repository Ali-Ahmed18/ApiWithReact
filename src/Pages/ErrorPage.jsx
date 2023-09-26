import React from 'react'
import { Typography } from '@material-tailwind/react'


function ErrorPage() {
    return (
        <>
        <div className='flex flex-col items-center justify-center h-[80vh]'>
        <Typography variant='h1'>
                Opps!
            </Typography>
            <Typography variant='h3'>
                We can't seem to find that.
                Try searching for it
            </Typography>
            <p>404 Error</p>
        </div>
 
        </>
    )
}

export default ErrorPage