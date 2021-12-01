
import { Link } from "react-router-dom";

const Login = ()=>{

    return (
        <div>
            <form>
                <h3>Inicio de Sesión</h3>

                <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <Link to="/"><button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button></Link>
                <p className="forgot-password text-right">
                    ¿No estás registrado? <Link to="/Registro">Regístrate</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;