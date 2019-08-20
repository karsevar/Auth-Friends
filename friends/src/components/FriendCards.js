import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';

import {axiosWithAuth} from '../auth/axiosWithAuth';

function FriendCards(props) {
    
    const [friends, setFriends] = useState([]);

    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);

        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setIsLoading(false) 
                setFriends([...res.data])
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }, [props.newFriend])

    return (
        <div className='friends-list'>
            {isLoading ? (
                    <Loader 
                        type='ThreeDots'
                        color='grey'
                        height={400}
                        width={400}
                    />
                ) : (
                    friends.map((friend, index)  => (
                        <div key={index} className='friend-card'>
                            <h3>{friend.name}</h3>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default FriendCards;