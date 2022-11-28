import { Route, Routes } from "react-router-dom";
import AuthUser from "./services/AuthUser";
import Login from "./pages/login";
import Register from "./pages/register";
import Main from './pages/main'

function App() {
  const {getToken} = AuthUser()
  if(getToken()) return <Main/>
  else return <Login/>
}

export default App;
