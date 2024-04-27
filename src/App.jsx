// import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cars from "./pages/Cars/Cars";
import Blog from "./pages/Blog/Blog";
import History from "./pages/History/History";
import LoggedRoute from "./routes/LoggedRoute";
import UnloggedRoute from "./routes/UnloggedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cars"
          element={
            <UnloggedRoute>
              <Cars />
            </UnloggedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <UnloggedRoute>
              <Blog />
            </UnloggedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <UnloggedRoute>
              <History />
            </UnloggedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <LoggedRoute>
              <Login />
            </LoggedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
