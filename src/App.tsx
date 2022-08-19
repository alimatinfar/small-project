import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RouteIsNotExists from "./components/RouteIsNotExists";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="*" element={<RouteIsNotExists/>}/>
    </Routes>
  );
}

export default App;
