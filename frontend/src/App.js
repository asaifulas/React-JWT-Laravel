import AuthUser from "./services/AuthUser";
import Login from "./pages/login";
import Main from './pages/main'
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  const {getToken} = AuthUser()
  if(getToken()) return <AuthContextProvider><Main/></AuthContextProvider> 
  else return <Login/>
}

export default App;
