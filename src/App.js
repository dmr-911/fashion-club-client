import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import LogIn from './Pages/Account/LogIn/LogIn';
import SignUp from './Pages/Account/SignUp/SignUp';
import Home from './Pages/Home/Home/Home';
import {AppRoutes} from './routes';
import AllProducts from './Pages/AllProducts/AllProducts';
import Cart from './Pages/Cart/Cart/Cart';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="login" element={<LogIn></LogIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="allProducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
