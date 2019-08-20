import React, {useState} from 'react';

function Friends(props) {
    const [friend, setFriend] = useState({name: '', age: '', email: ''})

    const handleChange = event => {
        console.log(friend);
        setFriend({...friend, [event.target.name]: event.target.value}) 
    }

    return (
        <div className='friends-container'>
            <div className='friends-form'>
                <form>
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
        </div>
    )
}

export default Friends