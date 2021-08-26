import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import io from "socket.io-client";


// const socket = io.connect('/');
function App() {
  return (
    <Container/>
  );
}

export default App;
