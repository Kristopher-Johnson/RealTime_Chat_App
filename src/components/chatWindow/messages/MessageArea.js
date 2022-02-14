import { useState } from "react";

const MessageArea = (props) => {
  const [message, setMessage] = useState("");
  const [submitState, setSubmitState] = useState(false);

  const Messages = () => {
    if (props.currentSession == null) {
      return <p>Please Select a Session</p>;
    } else {
      return props.session.messages.map((message) => {
        return <p key={message.messageID}>{message.message}</p>;
      });
    }
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if (props.currentSession == null) {
      alert("No Session Selected");
    } else {
      console.log(props.getSessionIndex());
      props.addMessage(
        props.getSessionIndex(),
        message,
        "this.state.currentDateTime",
        "user"
      );
      setSubmitState(!submitState);
    }
  }

  return (
    <div>
      <div>
        <Messages />
      </div>
      <div>
        <form onSubmit={formSubmitHandler}>
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            // defaultValue="Enter Message"
            placeholder="Type Message..."
          ></input>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default MessageArea;
