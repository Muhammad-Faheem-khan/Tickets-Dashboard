import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import PrivateRoute from "./privateRoute";
import LayoutWrapper from "../components/layout/layoutWrapper";
import Dashboard from "../pages/mainMenu/Dashboard";
import Profile from "../pages/Profile";
import TicketMenu from "../pages/mainMenu/ticketMenu";

export const AppRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<LayoutWrapper />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<TicketMenu />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
