import React from "react";
import { useState } from "react";

const Login = () => {
    const initialState = { username: '', password: '', }
    const errorsInitialState = {
        username: [],
        password: [],
    }
    const [loginForm, setLoginForm] = useState(initialState);
    const [ errors, setErrors] = useState(errorsInitialState);

    const handleChangeValue = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

    const ERRORS_DICT = {
        USERNAME_LENGTH: {
            text: 'Tu nombre de usuario debe tener al menos 3 caracteres',
            id: 1,
        }
    }
    const validateLength = (value, length) => {
        return value > length
    }

    const validateUsernameLength = (value) => {
        validateLength(value, 3)
    }

    const findError = (from, idError) => {
        return errors[from].find(error => error.id === idError)
    }
    const handleAbortInput = () => {
        if(validateUsernameLength(loginForm.username.length)){

        }

        if(findError('username', ERRORS_DICT.USERNAME_LENGTH.id)){

            setErrors({...errors, username: [...errors.username, ERRORS_DICT.USERNAME_LENGTH]})
        }
       
        
       
    }
    return (
        <main>
            <h1>Iniciar Sesión</h1>
            <form action="">
                <div style={{ display: "flex", flexDirection: "column", marginBottom: '10px', gap: '10px' }}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input id="username" type="text" placeholder="Joe Dow" name="username" onChange={handleChangeValue} onBlur={handleAbortInput} value={loginForm.username} />
                    {
                        errors.username.length > 0 &&
                        errors.username.map((error, index) => {
                            return (
                                <span key={index}>{error.text}</span>
                            )
                        })
                    }
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
                    <label htmlFor="password">Contraseña: </label>
                    <input id="password" type="password" name="password" onChange={handleChangeValue} value={loginForm.password} />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Enviar</button>
            </form>
        </main>
    )
}

export default Login