import { NavHeader, NavSpan, NavButton } from './header.styled';

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <NavHeader className="container-fluid">
        <NavSpan className="navbar-brand mb-0 h1 text-success">Navbar</NavSpan>
        <NavButton onClick={showModal}>Open Modal</NavButton>
      </NavHeader>
    </nav>
  );
};

export default Header;
