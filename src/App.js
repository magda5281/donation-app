import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={"/"} element={<HomeScreen/>}/>
          <Route exact path={"/register"} element={<RegisterScreen/>}/>
          <Route exact path ={"/login"} element={<LoginScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
