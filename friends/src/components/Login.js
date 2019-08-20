import React, {useState} from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

function Login(props) {
    const [credentials, setCredentials] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const login = e => {
        e.preventDefault();
        setIsLoading(true)
        axios
            .post('http://localhost:5000/api/login', credentials) 
            .then(res => {
                setIsLoading(false)
                localStorage.setItem('token', res.data.payload)
            })
            .catch(err => {
                setIsLoading(false) 
                console.log(err.response)
            })
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
                <input 
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
                <button>
                    {isLoading ? (
                        <Loader 
                        type="TailSpin" 
                        color="blue" 
                        height={10} 
                        width={5} 
                    />
                    ) : 'Submit!'}
                </button>
            </form>
        </div>
    )

}

export default Login;