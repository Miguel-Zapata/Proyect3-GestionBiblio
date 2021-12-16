import Alert from "react-bootstrap/Alert";

const AlertaWarning = (props) => {
  if (props.mensaje) {
    return (
      <Alert
        variant="warning"
        onClose={() => props.setwarning(false)}
        dismissible
      >
        <Alert.Heading>¡Importante!</Alert.Heading>
        <p>{props.mensaje}</p>
        <p> Podrás ver el listado y crear nuevos Libros, pero no podrás añadirlos a tu Biblioteca.</p>
      </Alert>
    );
  }
};

export default AlertaWarning;
