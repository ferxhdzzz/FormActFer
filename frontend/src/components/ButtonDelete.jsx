const ButtonDelete = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="button"
      >
        {text}
      </button>
    );
  };
  
  export default ButtonDelete;
  