const Button = (handleClick, text) => (
  <button
    onClick={handleClick}
    style={{ marginTop: "2rem", marginRight: "15px" }}
  >
    {text}
  </button>
);

export default Button;
