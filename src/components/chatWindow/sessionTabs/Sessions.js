import classes from "./Sessions.module.css";

const Sessions = (props) => {
  const MapSessions = () => {
    return props.sessions.map((session) => {
      function changeSession() {
        props.currentSessionHandler(session.id);
      }
      return (
        <button onClick={changeSession} key={session.id}>
          {session.name}
        </button>
      );
    });
  };

  return (
    <div className={classes.border}>
      <MapSessions />
    </div>
  );
};

export default Sessions;
