import Alert from "react-bootstrap/Alert";

const AlertaDanger = (props) => {
  if (props.mensaje) {
    return (
      <Alert
        variant="danger"
        onClose={() => props.setalerta(false)}
        dismissible
      >
        <Alert.Heading>¡Error!</Alert.Heading>
        <p>{props.mensaje}</p>
        {/* <p>
          {" "}
          Es obligatorio rellenar los campos que tienen un
          <span className="required-asterisco"> *</span>.
        </p> */}
      </Alert>
    );
  }
};

export default AlertaDanger;
