import React from 'react';
import "./Person.css";

const Person = () => {
  return (
    <div className="person">
        <div className="avatar">
            <img className="person-profile" src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="Profile image" />
        </div>
        <div className="person-content">
            <div>
            <h4 className="person-title">Pheonix Baker</h4>
            <h5 className="person-subtitle">@pheonix</h5>
            </div>
            <p className="last-time">10min ago</p>
        </div>
    </div>
  )
}

export default Person;