import React from 'react';
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from 'react-router-dom';
import {useState} from "react";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";


const LoginScreen = () => {

    const [user, setUser] = useState({email: "", password: ""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(e);
        const regex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        if (!regex.test(user.email) || (user.email==="")) {
            setEmailError(true);
            setUser({...user, "email": ""})
            console.log("invalid email")
            return false
        } else {
            setEmailError(false);
        }
        if (user.password.length < 6 || (user.password==="")) {
            setPasswordError(true);
            setUser({...user, "password":""})
            console.log("invalid password")
            return false
        } else {
            setEmailError(false);
            setPasswordError(false);
            console.log("submitted");
            auth.signInWithEmailAndPassword(
                user.email,
                user.password
            )
                .then((authUser)=>{
                    console.log(authUser.user.uid);
                    navigate("/", { replace: true });
                })
                .catch((error)=>{
                    console.log(error.message);
                    setAuthError(true);
                })
        }
    }
    return (
        <section className="login">

            <Nav />
            <div className="login__body">
                <h2>Zaloguj sie</h2>
                <Decoration marginTop="25px" marginBottom="60px"/>

                <form onSubmit={handleSubmit}>
                    <div className="login__wrapper">
                        <div className="form__control form__control--login">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                value={user.email}
                                name="email"
                                onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                style={{borderBottom: emailError && "2px solid red"}}/>
                            {(emailError) && (<div className="error">Podany email jest nieprawidlowy</div>)}
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Haslo </label>
                            <input type="password"
                                   name="password"
                                   value={user.password}
                                   onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                   style={{borderBottom: passwordError && "2px solid red"}}/>
                            {(passwordError) && (<div className="error">Podane haslo jest za krotkie</div>)}
                        </div>
                    </div>
                    {authError && <h3 className="error" style={{textAlign: "center", margin: "auto"}}> There is no user record corresponding to this identifier. </h3>}
                    <div className="login__buttons">
                        <Link to="/register">
                            <button className="btn btn--login  ">Zaloz konto</button>
                        </Link>
                        <button className="btn btn--login  ">Zaloguj sie</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginScreen;