import CartWidget from "CartWidget";

const NavBar = () => {
  return (
    <nav>
      <CartWidget />
      <ul>
        <li>
          <a href="#">Sección 1</a>
        </li>
        <li>
          <a href="#">Sección 2</a>
        </li>
        <li>
          <a href="#">Sección 3</a>
        </li>
        <li>
          <a href="#">Sección 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
