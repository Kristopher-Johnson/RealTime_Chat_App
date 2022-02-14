import { Fragment, useState } from "react";
import Sessions from "./sessionTabs/Sessions";
import MessageArea from "./messages/MessageArea";

const ChatWindow = (props) => {
  const [currentSession, setCurrentSession] = useState(null);

  function currentSessionHandler(session) {
    setCurrentSession(session);
  }
  function getSessionIndex() {
    return props.sessions.findIndex((object) => {
      return object.id === currentSession;
    });
  }

  return (
    <Fragment>
      <Sessions
        sessions={props.sessions}
        currentSessionHandler={currentSessionHandler}
      />
      <MessageArea
        session={props.sessions[getSessionIndex()]}
        currentSession={currentSession}
        addMessage={props.addMessage}
        getSessionIndex={getSessionIndex}
      />
    </Fragment>
  );
};

export default ChatWindow;
