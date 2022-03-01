import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Pages/Account/LogIn/LogIn';
import SignUp from './Pages/Account/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="login" element={<LogIn></LogIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
