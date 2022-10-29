import React, {useContext} from 'react';
import MyInput from "../components/UI/inout/MyInput";
import MyButton from "../components/UI/buttons/MyButton";
import {AuthContext} from "../context";

const Login = () => {

    const {isAuth , setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth' , 'true')
    }

    return (
        <div>
            <h1></h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter your login"/>
                <MyInput type="password" placeholder="Enter your pass"/>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
};

export default Login;