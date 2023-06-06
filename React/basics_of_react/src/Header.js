//parameter props in Header function or destructure is {parameter1,parameter2...}
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
Header.defaultProps = {
  title: "List",
};

export default Header;
