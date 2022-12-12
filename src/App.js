import AdminPanel from "./pages/AdminPanel";
import AdminEvent from "./pages/AdminEvent";
import { Route, Routes } from "react-router-dom";
import AdminCategory from "./pages/AdminCategory";
import AdminLocation from "./pages/AdminLocation";
import AdminSettings from "./pages/AdminSettings";
import UserHome from "./pages/UserHome";
import EventDetail from "./pages/EventDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import {
  PrivateRoute,
  AdminPrivateRoute,
} from "./components/privateRoutes/PrivateRoute";
import Bannedxd from "./pages/Bannedxd";
function App() {
  const cx = useContext(UserContext);
  return (
    <div>
      <Routes>
        <Route
          path="admin"
          element={
            <AdminPrivateRoute
              isLoggedIn={cx.loggedIn}
              isAdmin={cx.user.email === "admin"}
            >
              <AdminPanel />
            </AdminPrivateRoute>
          }
        >
          <Route
            path="event"
            element={
              <AdminPrivateRoute
                isLoggedIn={cx.loggedIn}
                isAdmin={cx.user.email === "admin"}
              >
                <AdminEvent />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="category"
            element={
              <AdminPrivateRoute
                isLoggedIn={cx.loggedIn}
                isAdmin={cx.user.email === "admin"}
              >
                <AdminCategory />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="location"
            element={
              <AdminPrivateRoute
                isLoggedIn={cx.loggedIn}
                isAdmin={cx.user.email === "admin"}
              >
                <AdminLocation />
              </AdminPrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <AdminPrivateRoute
                isLoggedIn={cx.loggedIn}
                isAdmin={cx.user.email === "admin"}
              >
                <AdminSettings id={cx.user.id} />
              </AdminPrivateRoute>
            }
          />
        </Route>

        <Route
          path="user"
          element={
            <PrivateRoute isLoggedIn={cx.loggedIn}>
              <UserHome />
            </PrivateRoute>
          }
        />
        <Route
          path="user/:id"
          element={
            <PrivateRoute isLoggedIn={cx.loggedIn}>
              <EventDetail />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="banned" element={<Bannedxd />} />
      </Routes>
    </div>
  );
}

export default App;
