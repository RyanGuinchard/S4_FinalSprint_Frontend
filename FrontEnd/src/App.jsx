import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import AdminRoutes from './services/AdminRoutes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/*" element={<AdminRoutes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
