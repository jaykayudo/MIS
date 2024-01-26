import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import LoginRouter from "./navigation/loginRouter";
import MainRouter from "./navigation/router";
import 'leaflet/dist/leaflet.css';
function App() {
  const authContext  = useContext(AuthContext);
  if(!authContext.loggedIn){
    return(
      <LoginRouter />
    )
  }

  return (
    <MainRouter />
  );
  
}

export default App;
