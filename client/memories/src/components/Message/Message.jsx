// import { IconButton, TextField } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Person from '../Person/Person';
import "./Message.css";

const Message = () => {
  const persons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="message-container">
      <h1 className="message-title">All Messages</h1>
      <div className="message-content">
        <div className="message-sidebar">
          <div className="message-sidebar-header">
            <h2 className="sidebar-title">Messages</h2>
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
              <input type="text" placeholder="Search" className="searchbar"/>
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
            
          </div>
          <div className="message-chat-content">

          </div>
          <div className="message-chat-footer">

          </div>
        </div>
      </div>

    </div>
  )
}

export default Message;