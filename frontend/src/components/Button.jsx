const Button = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="boton"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  