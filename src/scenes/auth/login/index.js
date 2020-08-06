import React, {useState} from 'react';


const Login = () => {

    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const [password, setPassword] = useState("");
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    };

    const style = {
        backgroundColor: "#FF5733" 
    };
    const style2 = {
        backgroundColor: "#33FFF0" 
    };

    return(
        <div>
            <form>
                    Email <input type="email" value={email} onChange={handleEmailChange} />
                    Contraseña <input type="text" value={password} onChange={handlePasswordChange} />
                    <button style={ email && password ? style2 : style }> Enviar</button>
            </form>
        </div>
    );
  
};

export default Login;