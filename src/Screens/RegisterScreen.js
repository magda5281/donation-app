import React, {useState} from 'react';
import {auth} from "../firebase";
import Nav from "../components/Home/Nav";
import Decoration from "../components/Decoration";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const RegisterScreen = () => {

    const [user, setUser] = useState({email: "", password: "", password2: ""});
    const [formError, setFormError] = useState(null);
    const [authError, setAuthError] = useState(false);
    const navigate = useNavigate();

console.log(user, formError, authError);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(null);

        const regex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        let error;
        if (user.email === "" || !regex.test(user.email)) {
            error = {
                inputId: "email",
                message: "Please provide valid email address."
            }
            setFormError(error);
            setUser({...user, "email": ""})
        } else if (user.password.length < 6 || (user.password === "")) {
            error = {
                inputId: "password",
                message: "Password is too short."
            }
            setFormError(error);
        } else if (user.password2 !== user.password || user.password2 === "") {
            error = {
                inputId: "password2",
                message: "Passwords do not match."
            }
            setFormError(error);
        } else {
            console.log("submitted")
            auth.createUserWithEmailAndPassword(
                user.email,
                user.password
            )
                .then((authUser) => {
                    console.log(authUser.user.uid);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                    setAuthError(true);
                    setUser({email: "", password: "", password2: ""});
                });
        }
    }
    return (
        <section className="login">
            <Nav/>
            <div className="login__body">
                <h2>Zaloz konto</h2>
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
                                style={{borderBottom: formError && formError.inputId === "email" && "2px solid red"}}/>
                            {formError && formError.inputId === "email" ?
                                <div className="error">{formError.message}</div> : null}
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Haslo </label>
                            <input type="password"
                                   name="password"
                                   value={user.password}
                                   onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                   style={{
                                       borderBottom: formError && formError.inputId === "password" && "2px solid" +
                                           " red"
                                   }}
                            />
                            {formError && formError.inputId === "password" ?
                                <div className="error">{formError.message}</div> : null}
                        </div>
                        <div className="form__control form__control--login">
                            <label htmlFor="password">Powtorz haslo </label>
                            <input type="password"
                                   name="password2"
                                   value={user.password2}
                                   onChange={e => setUser({...user, [e.target.name]: e.target.value})}
                                   style={{
                                       borderBottom: formError && formError.inputId === "password2" && "2px solid" +
                                           " red"
                                   }}/>
                            {formError && formError.inputId === "password2" ?
                                <div className="error">{formError.message}</div> : null}
                        </div>
                    </div>
                    {authError && <h3 className="error" style={{textAlign: "center", margin: "auto"}}>Account already exists. Please log in. </h3>}
                    <div className="login__buttons">
                        <Link to="/login">
                            <button className="btn btn--login  ">Zaloguj sie</button>
                        </Link>
                        <button className="btn  btn--login ">Zaloz konto</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default RegisterScreen;