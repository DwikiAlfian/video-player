import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Player from './components/player/Player';
import SideBar from './components/sidebar/SideBar';
import TitleBar from './components/titlebar/TitleBar';

const MainApp = () => {
  return (
    <>
      <Player />
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
