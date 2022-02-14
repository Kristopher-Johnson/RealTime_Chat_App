import classes from "./App.module.css";
import ChatWindow from "./components/chatWindow/ChatWindow";
import { useState } from "react";

const DUMMY_USERS = [];

const DUMMY_SESSIONS = [
  {
    name: "Session 1",
    id: "s1",
    messages: [
      {
        messageID: "s1m1",
        messageTime: "10:52",
        userID: "u1",
        message: "This is message 1 of session 1",
      },
      {
        messageID: "s1m2",
        messageTime: "10:55",
        userID: "u2",
        message: "This is message 2 of session 1",
      },
    ],
  },
  {
    name: "Session 2",
    id: "s2",
    messages: [
      {
        messageID: "s2m1",
        messageTime: "10:52",
        userID: "u1",
        message: "This is message 1 of session 2",
      },
      {
        messageID: "s2m2",
        messageTime: "10:57",
        userID: "u2",
        message: "This is message 2 of session 2",
      },
      {
        messageID: "s2m3",
        messageTime: "11:00",
        userID: "u3",
        message: "This is message 3 of session 2",
      },
    ],
  },
  {
    name: "Session 3",
    id: "s3",
    messages: [
      {
        messageID: "s3m1",
        messageTime: "10:52",
        userID: "u1",
        message: "This is message 1 of session 3",
      },
      {
        messageID: "s3m2",
        messageTime: "10:57",
        userID: "u2",
        message: "This is message 2 of session 3",
      },
      {
        messageID: "s3m3",
        messageTime: "11:00",
        userID: "u3",
        message: "This is message 3 of session 3",
      },
    ],
  },
];

function App() {
  // const [newMessage, setUseMessage] = useState("");
  function generateMessageID() {
    return Math.random();
  }

  function addMessage(sessionID, message, time, user) {
    DUMMY_SESSIONS[sessionID].messages.push({
      messageID: generateMessageID(),
      messageTime: time,
      userID: user,
      message: message,
    });
    // setUseMessage(message);
    // console.log(message);
    // console.log(DUMMY_SESSIONS);
  }

  return (
    <div className={classes.outer}>
      <div className={classes["main-section"]}>
        <div className={classes["chat-area"]}>
          <ChatWindow sessions={DUMMY_SESSIONS} addMessage={addMessage} />
        </div>
        <div className={classes["session-description"]}>
          {/* <SessionDescription/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
