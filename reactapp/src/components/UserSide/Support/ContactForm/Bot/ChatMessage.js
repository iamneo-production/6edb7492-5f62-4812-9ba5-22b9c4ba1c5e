import React from "react";
import {FaCommentDots} from 'react-icons/fa';
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
          <FaCommentDots className="message-icon" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}