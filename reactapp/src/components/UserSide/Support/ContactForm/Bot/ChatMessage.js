import React from "react";
import {ChatDots} from "react-bootstrap-icons";
import '../ContactFile.css';

export default function ChatMessage(props) {
  return (

    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          

        </span>
      ) : (
        <span className="message-left">
          <ChatDots className="message-icon" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}