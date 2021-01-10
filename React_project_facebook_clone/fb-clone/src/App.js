import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {/*Header*/}
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          {/*!!!App body!!!*/}

          <div className="app__body">
            {/*Sidebars*/}
            <Sidebar />
            {/*Feed */}
            <Feed />
            {/*Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
