import React from 'react';
import { Button } from '@mui/material';
import Posts from '../Posts/Posts'
import'./UserProfile.css'


function UserProfile() {
  return (
    <>
    <section className='user-profile-container'>
        <div className='image-container'>
            <div className='image'></div>
        </div>
        <div className='text-container'>
            <h1 className='name'>John Smilga</h1>
            <span className='userName'>@JohnSmilga</span>
            <div className='info-section'>
                <div className='field'>
                    <div className='values'>456</div>
                    <div className='field-name'>Followers</div>
                </div>
                <div className='field'>
                    <div className='values'>35</div>
                    <div className='field-name'>Following</div>
                </div>
                <div className='field'>
                    <div className='values'>35</div>
                    <div className='field-name'>post</div>
                </div>
            </div>
        </div>
        <div className='button-container'>
            <Button variant="contained" style={{backgroundColor:"hsl(212, 100%, 15%)"}}>Follow</Button>
            <Button variant='outlined'>Message</Button>
        </div>
    </section>
    <Posts />
    </>
  )
}

export default UserProfile