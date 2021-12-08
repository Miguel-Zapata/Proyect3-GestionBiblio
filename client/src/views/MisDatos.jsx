
import { Link } from "react-router-dom";

const MisDatos = ()=>{

    return(
        <div>

            <form>
                <h3>Modificar Datos</h3>

                <div className="form-group">
                    {/* <label>First name</label> */}
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>

                <div className="form-group">
                    {/* <label>Last name</label> */}
                    <input type="text" className="form-control" placeholder="Apellido" />
                </div>

                <div className="form-group">
                    {/* <label>Last name</label> */}
                    <input type="text" className="form-control" placeholder="Nombre de Usuario" />
                </div>

                <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    {/* <label>Password</label> */}
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <Link to=""><button type="submit" className="btn btn-primary btn-block">Aceptar Cambios</button></Link>
                {/* <p className="forgot-password text-right">
                    ¿Ya estás registrado? <Link to="/Login">Inicia Sesión</Link>
                </p> */}
            </form>  


            {/* <p>FORMULARIO CAMBIO DE DATOS</p>
            <button>Aceptar Cambios</button> */}

        </div>
    );
}

export default MisDatos;