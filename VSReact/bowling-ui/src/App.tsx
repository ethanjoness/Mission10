import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import BowlerList from './components/BowlerList.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlerList />
    </div>
  );
}

export default App;