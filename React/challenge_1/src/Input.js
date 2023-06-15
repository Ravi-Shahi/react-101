import colorNames from "colornames";
const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
  inputRef,
  handleRef,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add your color:</label>
      <input
        type="text"
        autoFocus
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        placeholder="Add your color"
        ref={inputRef}
      />
      <button
        onClick={(e) => {
          setIsDarkText(!isDarkText);
          handleRef();
        }}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
