import React, {useState} from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import styled from 'styled-components';

import {axiosWithAuth} from '../auth/axiosWithAuth';
import FriendCards from './FriendCards';

const FriendForm = styled.div`
    width: 500px;
    margin: 0 auto;
`;

function Friends(props) {
    const [friend, setFriend] = useState({name: '', age: '', email: ''})

    const [newFriend, setNewFriend] = useState({})

    const handleChange = event => {
        // console.log(friend);
        setFriend({...friend, [event.target.name]: event.target.value}) 
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(res => console.log(res)) 
            .catch(err => console.log(err))

        setNewFriend({...friend})

        setFriend({name: '', age: '', email: ''})
    }

    return (
        <div className='friends-container'>
            <FriendForm>
                <Form onSubmit={handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input
                            control={Input} 
                            placeholder='Name'
                            label='Name'
                            value={friend.name}
                            onChange={handleChange}
                            name='name'
                            required
                        />
                        <Form.Input
                            control={Input} 
                            placeholder='Age'
                            label='Age'
                            value={friend.age}
                            onChange={handleChange}
                            name='age'
                            required
                        />
                        <Form.Input
                            control={Input} 
                            placeholder='Email'
                            label='Email'
                            value={friend.email}
                            onChange={handleChange}
                            name='email'
                            required
                        />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
            </FriendForm>
            <FriendCards newFriend={newFriend} />
        </div>
    )
}

export default Friends