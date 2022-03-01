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
import { Spinner } from 'react-bootstrap';
import useDelay from './hooks/useDelay';

function App() {
  const {loadTime} = useDelay();
  return (
    <div className="App">
      {
        loadTime.length ?
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
      :
      <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
      <div>
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      </div>
    </div>
      }
    </div>
  );
}

export default App;
