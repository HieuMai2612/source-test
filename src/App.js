import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartGame from './components/StartGame/startGame';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import AddPlayer from './components/AddPlayer/addPlayer';
import TablePlayer from './components/TablePlayer/tablePlayer';
import GamePlay from './components/GamePlay/gamePlay';
import History from './components/History/history';
import WinnerPage from './components/WinnerPage/winnerPage';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Routes>
            <Route path="/" element={<StartGame />} />
            <Route path="/addplayer" element={<AddPlayer />} />
            <Route path="/list-players" element={<TablePlayer />} />
            <Route path="/game-play" element={<GamePlay />} />
            <Route path="/history" element={<History />} />
            <Route path="/winpage" element={<WinnerPage />} />

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
