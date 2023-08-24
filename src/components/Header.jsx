import "@/styles/Header.module.css";

const Header = () => {
    return (
      <header
      className="header"
      style={{
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      }}
      >
        <h1>Todos</h1>
        <p>Itesm are store in local storage</p>
      </header>
    );
  };
  export default Header;
  