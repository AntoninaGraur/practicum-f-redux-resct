import { NavHeader, NavSpan, NavButton } from './header.styled';

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <NavHeader>
        <NavSpan>Navbar</NavSpan>
        <NavButton onClick={showModal}>Open Modal</NavButton>
      </NavHeader>
    </nav>
  );
};

export default Header;
