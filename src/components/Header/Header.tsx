import { Link } from "react-router";
import logo from "@/assets/logo.svg";
import Button from "@/components/Button/Button";
import useLogInButton from "@/hooks/useLogInButton";
import "./Header.css";

export default function Header() {
  const { isLogined, handleClick } = useLogInButton();

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/contacts" className="header__link">
          Контакты
        </Link>
        <Button
          className="header__button"
          variant="outline"
          onClick={handleClick}
        >
          {isLogined ? "Выйти" : "Войти"}
        </Button>
      </div>
    </header>
  );
}
