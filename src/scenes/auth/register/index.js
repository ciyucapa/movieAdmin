import React, {useReducer} from 'react';
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

const fee = 3600;
const AMOUNT_CHANGE = 'AMOUNT_CHANGE';
const FIRST_NAME_CHANGE = 'FIRST_NAME_CHANGE';
const LAST_NAME_CHANGE = 'LAST_NAME_CHANGE';
const EMAIL_CHANGE = 'EMAIL_CHANGE';
const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
const PASSWORD_CONFIRM_CHANGE = 'PASSWORD_CONFIRM_CHANGE';

const reducer = (state, action) => {
    const {type} = action;

    switch (type) {
        case AMOUNT_CHANGE: {
            const {payload} = action;
            return {
                ...state,
                usd: payload,
                cop: payload * fee
            }
        }
        case FIRST_NAME_CHANGE: {
            const {payload} = action;
            return {
                ...state,
                firstName: payload,
            }
        }
        case LAST_NAME_CHANGE: {
            const {payload} = action;
            return {
                ...state,
                lastName: payload,
            }
        }
        case EMAIL_CHANGE: {
            const {payload} = action;
            return {
                ...state,
                email: payload,
            }
        }
        case PASSWORD_CHANGE: {
            const {payload} = action;
            return {
                ...state,
                password: payload,
            }
        }
        case PASSWORD_CONFIRM_CHANGE: {
            const {payload} = action
            return {
                ...state,
                passwordConfirm: payload,
            }
        }
        default: {
            return{
                ...state
            }
        }
    };
};
const Register = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {firstName, lastName, email, password, passwordConfirm, usd, cop} = state;

    const amountHandler = (event) => {
        const value = parseFloat(event.target.value);
        console.log('El monto del input es de: ', value);
        dispatch({
            type: AMOUNT_CHANGE,
            payload: value,
        });
    };

    const firstNameChange = (event) => {
        dispatch({
            type: FIRST_NAME_CHANGE,
            payload: event.target.value,
        });
    };

    const lastNameChange = (event) => {
        dispatch({
            type: LAST_NAME_CHANGE,
            payload: event.target.value,
        });
    };

    const emailChange = (event) => {
        dispatch ({
            type: EMAIL_CHANGE,
            payload: event.target.value,
        })
    };
    const passwordChange = (event) => {
        dispatch ({
            type: PASSWORD_CHANGE,
            payload: event.target.value,
        })
    };
    const passwordConfirmChange = (event) => {
        dispatch({
            type: PASSWORD_CONFIRM_CHANGE,
            payload: event.target.value,
        })
    };

    return(
        <div className="container">
            <div className="container-form"> 
                <form>
                    <h1>Registro de Usuario</h1>
                    <label>First Name
                    <input className="input" name="firstName" type="text" value={firstName} onChange={firstNameChange} />
                    </label>
                    <label>LastName
                    <input className="input" name="lastName" type="text" value={lastName} onChange={lastNameChange} />
                    </label>
                    <label>Email
                    <input className="input" name="email" type="email" value={email} onChange={emailChange} />
                    </label>
                    <label>Password
                    <input className="input" name="password" type="password" value={password} onChange={passwordChange} />
                    </label>
                    <label>Password Confirm
                    <input className="input" name="passwordConfirm" type="password" value={passwordConfirm} onChange={passwordConfirmChange} />
                    </label>
                    El monto es de: {usd} USD
                    que equivale a: {cop} COP
                    <input className="input" name="amount" type="number" value={usd} onChange={amountHandler} />
                    <button 
                    type="submit">Enviar!</button>
                </form>
            </div>
        </div>
    )
}

export default Register;