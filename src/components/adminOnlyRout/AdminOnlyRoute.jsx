import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
import { Link } from 'react-router-dom';

const AdminOnlyRoute = ({children}) => {
    const userEmail = useSelector(selectEmail);
    if(userEmail === "test@abc.com"){
        return children;
    }
    return (
        <section style={{height:"80vh"}}>
            <div>
                <h2>Permission Denied.</h2>
                <p>This page can be viewed only by Admin user.</p>
                <br/>
                <Link to="/" >
                <button>&lrr; Back To Home</button>
                </Link>
            </div>
        </section>
    );
}

export const AdminOnlyLink = ({children}) => {
    const userEmail = useSelector(selectEmail);
    if(userEmail === "test@abc.com"){
        return children;
    }
    return null;
}

export default AdminOnlyRoute
