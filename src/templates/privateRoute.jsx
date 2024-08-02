
import { useAuth } from '../contexts/authContext';
import {  Navigate, Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Logout from '../components/LogOut/Logout';

export function PrivateRoute({ children }) {
  const { auth } = useAuth();


  return auth ? children : <Navigate to='/' />
}

export default function PrivateRouteLayout() {
  const { auth } = useAuth();

  return (
    <div>
      <Header>
        <div><Link to="/">Home</Link></div>
        {auth ? (
          <>
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div><Logout/></div> <Logout/>
          </>
        ) : (
          <>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/cadastro">Cadastro</Link></div>
          </>
        )}
    </Header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
