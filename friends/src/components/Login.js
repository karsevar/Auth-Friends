import React, {useState} from 'react';
import {Button, Form, Container} from 'semantic-ui-react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import styled from 'styled-components';

const LoginForm = styled.div`
    width: 300px;
    margin: 0 auto;
`;

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
                props.history.push('/friends')
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
        <LoginForm>
            <Container textAlign='center'>
                <Form onSubmit={login}>
                    <Form.Field>
                        <label>Username</label>
                        <input 
                            type='text'
                            name='username'
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button type='submit'>
                        {isLoading ? (
                                    <Loader 
                                    type="TailSpin" 
                                    color="blue" 
                                    height={10} 
                                    width={5} 
                                />
                                ) : 'Submit!'}
                    </Button>
                </Form>
            </Container>
        </LoginForm>
    )

}

export default Login;