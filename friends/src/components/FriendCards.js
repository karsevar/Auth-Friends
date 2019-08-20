import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../auth/axiosWithAuth';

function FriendCards(props) {
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [friends])

    return (
        <div className='friends-list'>

        </div>
    )
}

export default FriendCards;