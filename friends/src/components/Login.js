import React, {useState} from 'react';
import axios from 'axios';

function Login(props) {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials) 
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
                <input 
                    type='text'
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit!</button>
            </form>
        </div>
    )

}

export default Login;