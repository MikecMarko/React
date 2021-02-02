import { useEffect, useState } from 'react';
import './App.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './components/Message';
import db from './components/Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import logo from './images/messenger_logo.webp';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //listener
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (e) => {
    //adding to the existing data in array.
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="app">
      <img src={logo} alt="" />
      <h2>Welcome {username}</h2>
      {/*Input field and button need to be inside of form so you can just press enter for sending */}
      <form className="app__form">
        {/*Input field */}
        <FormControl className="app__formcontrol">
          <Input
            className="app__input"
            placeholder="Enter a message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            className="button"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

          {/*Button */}
        </FormControl>
      </form>

      {/*Messages*/}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
