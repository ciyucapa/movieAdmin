import React, {useReducer, useState, useEffect} from 'react';
import '../login/index.css';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    usd: 0,
    cop: 0,
};

const reducer = (state, action) => {

};

const Register = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {firstName, lastName, email, password, passwordConfirm, usd, cop} = state;

    const amountHandler = (event) => {
        const value = parseFloat(event.target.value);
        console.log('El monto del input es de: ', value);
    };

    return(
        <div className="container">
            <div className="container-form"> 
                <form>
                    <h1>Registro de Usuario</h1>
                    <label>Nombre
                    <input className="input" name="nombre" type="text" value={firstName} />
                    </label>
                    <label>Apellido
                    <input className="input" name="apellido" type="text" value={lastName} />
                    </label>
                    <label>Correo electronico
                    <input className="input" name="correo" type="email" value={email} />
                    </label>
                    <label>Contraseña
                    <input className="input" name="password" type="password" value={password} />
                    </label>
                    <label>Repetir contraseña
                    <input className="input" name="repeat-password" type="password" value={passwordConfirm} />
                    </label>
                    El monto es de: {usd} USD
                    que equivale a: {cop} COP
                    <input className="input" name="Monto" type="number" value={usd} onChange={amountHandler} />
                    <button 
                    type="submit">Enviar!</button>
                </form>
            </div>
        </div>
    )
}

export default Register;