import { Route, Routes } from "react-router-dom";
import AuthUser from "./components/AuthUser";
import Login from "./pages/login";
import Main from './pages/main'

function App() {
  const {getToken} = AuthUser()
  if(getToken()) return <Main/>
  else return <Login/>
}

export default App;
