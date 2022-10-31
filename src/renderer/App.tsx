import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Explore from './components/explore/Explore';
import Player from './components/player/Player';
import SideBar from './components/sidebar/SideBar';
import TitleBar from './components/titlebar/TitleBar';

const MainApp = () => {
  return (
    <>
      <div id="exploreMedia">
        <Explore />
      </div>
      <div id="playerMedia" style={{ width: '100%', height: '100%' }}>
        <Player />
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <TitleBar />
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
