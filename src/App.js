import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
