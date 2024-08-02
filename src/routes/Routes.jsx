import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

import Login from "../components/Login/Login"
import Home from "../pages/Home/Home"
import UserForm from "../components/UserForm/UserForm"
import Dashboard from "../pages/Dashboard/Dashboard"
import PrivateRouteLayout, { PrivateRoute } from '../templates/privateRoute'
import NotFound from "../pages/NotFound"
export default function RoutesComponent() {
    return (

        <Router>

          <Routes>
            <Route path="/" element={<PrivateRouteLayout />}>            
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<UserForm />} />
            <Route path="/404" element={<NotFound />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        
      );
}