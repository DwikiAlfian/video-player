import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AltApp from './AltApp';
import './App.css';

const MainApp = () => {
  return (
    <>
      <AltApp />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
