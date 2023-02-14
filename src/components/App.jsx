import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Main from "../pages/Main/Main";
import "./App.css";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route index element={<Main />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
