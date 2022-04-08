import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SignUpLogin from "./components/SignUpLogin/index";
import AuthorizedRoute from "./components/AuthorizedRoute";
import NavBar from "./components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<SignUpLogin />} />
          <Route exact path="/fetch_normal" element={<Home />} />
          <Route
            exact
            path="/fetch_auth"
            element={
              <AuthorizedRoute>
                <>
                  <NavBar />
                  <Home />
                </>
              </AuthorizedRoute>
            }
          ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
