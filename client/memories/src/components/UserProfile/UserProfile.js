import React from 'react';
import { Button } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import'./UserProfile.css'
import { Box } from '@material-ui/core';


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
            <span className='description'>I am an extrovert and i love coding</span>
        </div>
        <div className='button-container'>
            <Button variant="contained" style={{backgroundColor:"hsl(212, 100%, 15%)"}}>Follow</Button>
            <Button variant='contained' style={{backgroundColor:"rgb(83, 96, 153)"}}>Message</Button>
        </div>
    </section>
    <Box sx={{ m: 13 }}>
        <TimeLine/>
    </Box>
    </>
  )
}

export default UserProfile