import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import LoggedOutScreen from "./Screens/LoggedOutScreen";
import OddajRzeczyScreen from "./Screens/OddajRzeczyScreen";
import {useEffect, useState} from "react";
import {auth} from "./firebase";

function App() {

  const [loggedIn, setLoggedIn] =useState(null);

  useEffect(()=>{

  const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    if(userAuth){
        setLoggedIn(userAuth.email);
    } else {
      setLoggedIn(null);
    }
  })
    return unsubscribe;
  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={"/"} element={<HomeScreen loggedIn={loggedIn}/>}/>
          <Route exact path={"/register"} element={<RegisterScreen/>}/>
          <Route exact path ={"/login"} element={<LoginScreen/>}/>
          <Route exact path ={"/loggedOut"} element={<LoggedOutScreen/>}/>
          <Route exact path = {"/oddajRzeczy"} element = {<OddajRzeczyScreen loggedIn={loggedIn}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
