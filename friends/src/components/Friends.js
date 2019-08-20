import React, {useState} from 'react';

function Friends(props) {
    return (
        <div className='friends-container'>
            <div className='friends-form'>
                <form>
                    <input
                        placeholder='Name'
                        type='text'
                        // value={}
                        name='name'
                        // onChange={}
                        required
                    />
                    <input 
                        placeholder='Age'
                        type='number'
                        // value={}
                        name='age'
                        // onChange={}
                        required
                    />
                    <input
                        placeholder='Email'
                        type='text'
                        // value={}
                        name='email'
                        // onChange={}
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export default Friends