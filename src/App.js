import AdminPanel from "./pages/AdminPanel";
import AdminEvent from "./pages/AdminEvent";
import { Route, Routes } from "react-router-dom";
import AdminCategory from "./pages/AdminCategory";
import AdminLocation from "./pages/AdminLocation";
import AdminSetting from "./pages/AdminSetting";
import UserHome from "./pages/UserHome";
import EventDetail from "./pages/EventDetail";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="admin" element={<AdminPanel />}>
          <Route path="event" element={<AdminEvent />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="location" element={<AdminLocation />} />
          <Route path="settings" element={<AdminSetting />} />
        </Route>
        <Route path="user" element={<UserHome />} />
        <Route path="user/:id" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;
