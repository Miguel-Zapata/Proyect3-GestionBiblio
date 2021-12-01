import { Link } from "react-router-dom";

const Registro = ()=>{

    return (
        <div>
            
            <form>
                <h3>Registro de usuario</h3>

                <div className="form-group">
                    {/* <label>First name</label> */}
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    {/* <label>Last name</label> */}
                    <input type="text" className="form-control" placeholder="Apellido" />
                </div>

                <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <Link to="/Login"><button type="submit" className="btn btn-primary btn-block">Registrarse</button></Link>
                <p className="forgot-password text-right">
                    ¿Ya estás registrado? <Link to="/Login">Inicia Sesión</Link>
                </p>
            </form>

            {/* <button><Link to="/Login">Login</Link></button> */}

            
        </div>
    );
};

export default Registro;