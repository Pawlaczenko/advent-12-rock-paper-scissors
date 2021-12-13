import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Choose from './components/Choose';
import Game from './components/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="game/:play" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
