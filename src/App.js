import AdminPanel from "./pages/AdminPanel";
import AdminEvent from "./pages/AdminEvent";
import { Route, Routes } from "react-router-dom";
import AdminCategory from "./pages/AdminCategory";
import AdminLocation from "./pages/AdminLocation";
import AdminSetting from "./pages/AdminSetting";
import UserHome from "./pages/UserHome";
import EventDetail from "./pages/EventDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="admin" element={<AdminPanel />}>
          <Route path="event" element={<AdminEvent />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="location" element={<AdminLocation />} />
          <Route path="settings" element={<AdminSetting />} />
        </Route>
        <Route path="user" element={<UserHome />} />
        <Route path="user/:id" element={<EventDetail />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
