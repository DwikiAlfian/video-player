import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import AltApp from './AltApp';
import './App.css';

const MainApp = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
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
