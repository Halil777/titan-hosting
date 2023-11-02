// import { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3001");
import { Fragment } from "react";
import ChatwootWidget from "../components/chatwoot/ChatwootWidget";

function Chat() {
  //   const [message, setMessage] = useState("");
  //   const [messages, setMessages] = useState([]);

  //   useEffect(() => {
  //     socket.on("chat message", (msg) => {
  //       setMessages((prevMessages) => [...prevMessages, msg]);
  //     });
  //   }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     socket.emit("chat message", message);
  //     setMessage("");
  //   };

  return (
    // <div style={{ marginTop: "100px", marginBottom: "50px" }}>
    //   <div>
    //     {messages.map((msg, index) => (
    //       <div key={index}>{msg}</div>
    //     ))}
    //   </div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={message}
    //       onChange={(e) => setMessage(e.target.value)}
    //     />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <Fragment>
      <ChatwootWidget />
      {/* <Component {...}> */}
    </Fragment>
  );
}

export default Chat;
