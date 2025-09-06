import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h2>Hey it seems like an error</h2>
           <button className='btn btn-primary'><Link to="/">go back</Link></button>
        </div>
    );
};

export default ErrorPage;