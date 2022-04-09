import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Resister from './components/Resister/Resister';
import RequereAuth from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/orders' element={
          <RequereAuth>
            <Orders></Orders>
          </RequereAuth>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
