import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Account from "./components/Account";
import DefaultSettings from "./components/DefaultSettings";
import DefaultDashboard from "./components/DefaultDashboard.jsx";
import ProfileID from "./components/ProfileID.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DefaultDashboard />} />
            <Route path="overview" element={<Overview />} />
            <Route path="settings" element={<Settings />}>
              <Route index element={<DefaultSettings />} />
              <Route path="profile" element={<Profile />}>
                <Route path=":id" element={<ProfileID />} />
              </Route>
              <Route path="account" element={<Account />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
