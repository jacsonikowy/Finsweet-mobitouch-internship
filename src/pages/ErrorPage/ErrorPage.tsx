import React from 'react'
import './ErrorPage.scss'
import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
    const error: any = useRouteError();

    return (
        <div className='ereor'>
            <h1>Unexpected Error</h1>
            <h1>{error.statusText || error.message}</h1>
        </div>
    )
}

export default ErrorPage