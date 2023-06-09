import React from 'react';
import './App.css';
import TextNotification from './components/TextNotification';

function App() {

  const textMessage = {
    from: "3342079227",
    text: "This is a message from your client about a loan",
    threadId: "123456789"
  };

  const sendReply = (replyMessage) => {};

  const navigateToInboxThread = (threadId) => {};

  return (
    <div className="App">
      <TextNotification
          textMessage={textMessage}
          sendReply={sendReply}
          navigateToInboxThread={navigateToInboxThread}
        />
    </div>
  );
}

export default App;
