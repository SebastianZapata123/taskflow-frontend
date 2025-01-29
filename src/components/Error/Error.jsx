import "./error.css";
function Error(props) {
  const err = props.error;
  return (
    <>
      <div className={`error ${err}`}>Usuario o contrasela incorrectos</div>
    </>
  );
}

export default Error;
