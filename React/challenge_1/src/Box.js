import "./index.css";
const Box = ({ colorValue, setColorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="Box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Box;
