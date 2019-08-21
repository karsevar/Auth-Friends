import React, {useState, useEffect} from 'react';
import Loader from 'react-loader-spinner';
import { Button, Card, Image } from 'semantic-ui-react'
import styled from 'styled-components';

import {axiosWithAuth} from '../auth/axiosWithAuth';

const FriendsList = styled.div`
    margin: 20px 10px 0 10px;
`;

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
        <FriendsList>
            {isLoading ? (
                    <Loader 
                        type='ThreeDots'
                        color='grey'
                        height={400}
                        width={400}
                    />
                ) : (
                    <Card.Group>
                    {friends.map((friend, index)  => (
                        <Card key={index}>
                            <Card.Content>
                                <Card.Header>{friend.name}</Card.Header>
                                <Card.Meta>{friend.age}</Card.Meta>
                                <Card.Meta>{friend.email}</Card.Meta>
                            </Card.Content>
                        </Card>
                    ))}
                    </Card.Group>
                )
            }
        </FriendsList>
    )
}

export default FriendCards;