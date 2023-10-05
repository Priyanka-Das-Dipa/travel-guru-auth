import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen text-center'>
            <div>
            <h2 className='text-4xl font-semibold text-red-600'>Error 404!</h2>
            <br />
            <p className='text-2xl font-medium'>Page Can not Load....Try Again....</p>
            <br />
            <Link to="/" className='btn btn-warning'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;