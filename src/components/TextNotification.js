import React, { useState } from 'react';

const TextNotification = ({ textMessage, sendReply, navigateToInboxThread }) => {
  const [replyMessage, setReplyMessage] = useState('');

  const handleSendReply = () => {
    console.log('Reply:', replyMessage);
    sendReply(replyMessage);
  };

  const handleNavigateToThread = () => {
    console.log('Navigate to threaded: ', textMessage.threadId);
    navigateToInboxThread(textMessage.threadId);
  };

  var FormatedNumber = "(" + textMessage.from.substr(0, 3) + ") " + textMessage.from.substr(3, 3) + " - " + textMessage.from.substr(6);


  return (
    <div className="text-notification">
      <button className="text-notification-photo" onClick={handleNavigateToThread}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="72" height="72" color="white" viewBox="0 0 24 24" stroke="currentColor" fill="none" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8h.01"></path>
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
          </svg>
        </button>
      <div className="text-notification-body">
        <div className="from"> <strong>New message from:</strong><br></br> {FormatedNumber}</div>
        <div className="thread-id">{textMessage.threadId}</div>
        <div className="text-notification-text">"{textMessage.text}"</div>
        <input 
        className='text-notification-message'
          placeholder='Your reply to be sent'
          type="text"
          value={replyMessage}
          onChange={(e) => setReplyMessage(e.target.value)}
        />
        <button className="send-reply" onClick={handleSendReply}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 8h.01"></path>
          <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
          <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
          <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
        </svg>
          Send Reply
        </button>
      </div>
    </div>
  );
};

export default TextNotification;
