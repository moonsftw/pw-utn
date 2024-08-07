import React from "react";
import { useState } from "react";
import { users } from "../../Data/usersData";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const initialState = { username: '', password: '', }
    const errorsInitialState = {
        username: [],
        password: [],
        global: [], 
    }
    const [loginForm, setLoginForm] = useState(initialState);
    const [ errors, setErrors] = useState(errorsInitialState);

    const handleChangeValue = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    }

   
    const validateLength = (value, length) => {
        return value >= length;
    }

    const validateUsernameLength = (value) => {
        return validateLength(value, 3)
    }

    const findError = (from, idError) => {
        return errors[from].find(error => error.id === idError)
    }
    const ERRORS_DICT = {
        USERNAME_LENGTH: {
            text: 'usuario debe tener al menos 3 caracteres',
            id: 1,
            validate: validateUsernameLength, 
        },
        USER_NOT_FOUND: {
            text: 'usuario no encontrado',
            id: 2,
        }
    }

    const validateError = (from , errorToValidate) => {
        if(findError(from, errorToValidate.id)){
            if(errorToValidate.validate(loginForm[from].length)){
                const newErrors = errors[from].filter(error => error.id !== errorToValidate.id);
                setErrors({...errors, [from]: newErrors});
            }
        } else {
            if(!errorToValidate.validate(loginForm[from].length)){
                setErrors({...errors, [from]: [...errors[from], errorToValidate]})
            }
        }
    }

    const handleBlurInput = () => {
      /*   if(!validateUsernameLength(loginForm.username.length) && !findError('username', ERRORS_DICT.USERNAME_LENGTH.id)){
            setErrors({...errors, username: [...errors.username, ERRORS_DICT.USERNAME_LENGTH]})
            console.log(errors)
        } else {
            const newUsernameErrors = errors.username.filter(error => error.id !== ERRORS_DICT.USERNAME_LENGTH.id);
            setErrors({...errors, username: newUsernameErrors});
        } */

        /* if(findError('username', ERRORS_DICT.USERNAME_LENGTH.id)){
            if(validateUsernameLength(loginForm.username.length)){
                const newUsernameErrors = errors.username.filter(error => error.id !== ERRORS_DICT.USERNAME_LENGTH.id);
                setErrors({...errors, username: newUsernameErrors});
            }
        } else {
            if(!validateUsernameLength(loginForm.username.length)){
                setErrors({...errors, username: [...errors.username, ERRORS_DICT.USERNAME_LENGTH]})
            }
        } */
       validateError('username', ERRORS_DICT.USERNAME_LENGTH)
    }

    const navigate = useNavigate();        

    const handleLogin = (e) => {
        e.preventDefault();
        //acá podríamos validar los errores.
        for(const user of users){
            if(user.username === loginForm.username){
                localStorage.setItem('user', JSON.stringify(user));
                return navigate('/')
            }
        }
        setErrors({...errors, global: [ERRORS_DICT.USER_NOT_FOUND]})
    }
   
    return (
        <main>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: '10px', gap: '10px' }}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input id="username" type="text" placeholder="Joe Dow" name="username" onChange={handleChangeValue} onBlur={handleBlurInput} value={loginForm.username} />
                    {
                        errors.username.length > 0 &&
                        errors.username.map((error) => {
                            return (
                                <span key={error.id} style={{ color: 'red' }}>{error.text}</span>
                            )
                        })
                    }
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: '10px' }}>
                    <label htmlFor="password">Contraseña: </label>
                    <input id="password" type="password" name="password" onChange={handleChangeValue} value={loginForm.password} />
                </div>
                {
                    
                    errors.global.length > 0 && 
                    errors.global.map((error) => {
                        return (
                            <span key={error.id} style={{ color: 'red' }}>{error.text}</span>
                        )
                    }
                    )
                }
                <button type="submit" style={{ marginTop: '10px' }}>Enviar</button>
            </form>
        </main>
    )
}

export default Login