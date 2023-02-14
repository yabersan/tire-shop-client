import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "./App.css";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
