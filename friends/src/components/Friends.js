import React, {useState} from 'react';
import {axiosWithAuth} from '../auth/axiosWithAuth';
import FriendCards from './FriendCards';

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
            <div className='friends-form'>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder='Name'
                        type='text'
                        value={friend.name}
                        name='name'
                        onChange={handleChange}
                        required
                    />
                    <input 
                        placeholder='Age'
                        type='number'
                        value={friend.age}
                        name='age'
                        onChange={handleChange}
                        required
                    />
                    <input
                        placeholder='Email'
                        type='text'
                        value={friend.email}
                        name='email'
                        onChange={handleChange}
                        required
                    />
                    <button>Submit</button>
                </form>
            </div>
            <FriendCards newFriend={newFriend} />
        </div>
    )
}

export default Friends