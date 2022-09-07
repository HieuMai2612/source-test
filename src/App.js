import React from 'react';
import DialogPopup from './components/DialogPopup/dialogPopup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello this is Duke</div>
        <div>Please click below for more </div>
        <DialogPopup></DialogPopup>
      </header>
    </div>
  );
}

export default App;
