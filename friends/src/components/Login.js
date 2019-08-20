import React from 'react';
import axios from 'axios';

function Login(props) {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        axiosWithAuth().get('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                console.log(res.data.token);
            })
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
                
            </form>
        </div>
    )

}