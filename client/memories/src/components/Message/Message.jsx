import { IconButton} from '@material-ui/core';
import React, { useState } from 'react';
import Person from '../Person/Person';
import "./Message.css";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import InputEmoji from 'react-input-emoji';
import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Message = () => {
  const [ text, setText ] = useState('');
  const [sidebar, setSidebar] = useState(false);
  function handleOnEnter (text) {
    console.log('enter', text)
  }

  function handleToggle (){
    setSidebar(!sidebar);
  }

  const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  {/*
  https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80

  https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80

  https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80

  https://images.unsplash.com/photo-1643646736753-04809d58cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80
  */}
  return (
    <div className="message-container">
      <h1 className="message-title">All Messages</h1>
      <div className="message-content">
        <div className="message-sidebar">
          <div className="message-sidebar-header">
            <h2 className="sidebar-title"><ChatIcon className="message-icon"/> Messages</h2>
            {/* <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  )
                }}
              /> */}
              <input type="text" placeholder=" 🔍 Search" className="searchbar"/>
          </div>
          <div className="message-sidebar-content">
            { persons.map(person => {
              return <Person key={person.value}/>;
            })
            }
          </div>
        </div>
        <div className="message-chat">
          <div className="message-chat-header">
            <div className="arrow-icon" onClick={handleToggle}>
              <ArrowBackIcon />
            </div>
            <div className="chat-avatar">
              <img className="chat-profile" src="https://images.unsplash.com/photo-1643646736753-04809d58cbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="Chat Profile" />
            </div>
            <div className="chat-header-content">
              <div>
                <h4 className="chat-title">Andrew Bond <span className="status">• Online</span></h4>
                <h5 className="chat-subtitle">@anbond</h5>
              </div>
              <button className="chat-header-btn">View Profile</button>
              <div className="threedot-icon">
                <MoreVertIcon/>
              </div>
            </div>
          </div>
          <div className="message-chat-content">

          </div>
          <div className="message-chat-footer">
              {/* <TextField
                id="standard-bare"
                variant="outlined"
                placeholder="Enter a message..."
                InputProps={{
                  endAdornment:(
                    <IconButton>
                      <InsertEmoticonIcon/>
                    </IconButton>
                  )
                }}
              /> */}
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
              <div className="send-btn">
                <IconButton>
                  <SendRoundedIcon className="send-icon"/>
                </IconButton>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Message;