import React from 'react'
import "./Notification.css"
import { Avatar } from '@material-ui/core'
import  PublishIcon  from '@material-ui/icons/Publish'
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function Notification() {
  return (
    <div className='container'>
      <h1>Notifications</h1>
            <div className = "post__avatar">
                <Avatar 
                    // src = {avatar}
                />
                 </div>
      <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        Rahul Singh
                            <span className = "post__headerSpecial">
                                {/* {verified && <VerifiedUserIcon className = "post__badge" />} */}
                                @Rahul_21
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>Replying to @elonmusk
                           <br /> It's a lovely day  
                        </p>
                    </div>
                </div>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "medium" /> 
                    <FavoriteBorderIcon fontSize = "medium" />
                    <PublishIcon  fontSize = "medium" /> 
                </div>
            </div>
            <div className = "post__avatar">
                <Avatar 
                    // src = {avatar}
                />
                 </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        Shreya Lakra
                            <span className = "post__headerSpecial">
                                {/* {verified && <VerifiedUserIcon className = "post__badge" />} */}
                                @shreyalakra
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>Replying to @amit
                           <br /> The purpose of our lives is to be happy  
                        </p>
                    </div>
                </div>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "medium" /> 
                    <FavoriteBorderIcon fontSize = "medium" />
                    <PublishIcon  fontSize = "medium" /> 
                </div>
            </div>
            <div className = "post__avatar">
                <Avatar 
                    // src = {avatar}
                />
                 </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        Swati Shukla
                            <span className = "post__headerSpecial">
                                {/* {verified && <VerifiedUserIcon className = "post__badge" />} */}
                                @swatiiscool
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>Replying to @aman
                           <br /> 6 years in java nothing can stop you in python  
                        </p>
                    </div>
                </div>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "medium" /> 
                    <FavoriteBorderIcon fontSize = "medium" />
                    <PublishIcon  fontSize = "medium" /> 
                </div>
            </div> 
            <div className = "post__avatar">
                <Avatar 
                    // src = {avatar}
                />
                 </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        Chelsea Banke
                            <span className = "post__headerSpecial">
                                {/* {verified && <VerifiedUserIcon className = "post__badge" />} */}
                                @Chelsea Banke
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>Replying to @saam_codes
                           <br /> I have master’s degrees in Social Work and Public Health… if I hadn’t gone into tech, I most likely wouldn’t have made more than maybe $60k. There’s no one single fix that needs to happen here - tech is paid a lot, other occupations aren’t paid enough, and COL is far too high.  
                        </p>
                    </div>
                </div>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "medium" /> 
                    <FavoriteBorderIcon fontSize = "medium" />
                    <PublishIcon  fontSize = "medium" /> 
                </div>
            </div>        
      </div>
  )
}

export default Notification