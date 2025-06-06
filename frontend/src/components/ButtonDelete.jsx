const ButtonDelete = ({ type, onClick, text }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="delete"
      >
        {text}
      </button>
    );
  };
  
  export default ButtonDelete;
  