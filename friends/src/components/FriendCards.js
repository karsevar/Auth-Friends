import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../auth/axiosWithAuth';

function FriendCards(props) {
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends([...res.data])
            })
            .catch(err => console.log(err))
    }, [friends])

    return (
        <div className='friends-list'>
            {friends.map(friend => (
                <div className='friend-card'>
                    <h3>{friend.name}</h3>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendCards;