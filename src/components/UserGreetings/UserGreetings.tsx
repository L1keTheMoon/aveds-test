import useLogInButton from "@/hooks/useLogInButton";
import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";
import { useNavigate } from "react-router";
import "./UserGreetings.css";

interface UserGreetingsProps {
  titleText: string;
  contactsButtonText: string;
  logoutButtonText: string;
}

export default function UserGreetings({
  titleText,
  contactsButtonText,
  logoutButtonText,
}: UserGreetingsProps) {
  const navigate = useNavigate();
  const { isLogined, handleClick } = useLogInButton();

  return (
    <div className="container">
      <div>
        <Title>{titleText}</Title>
        <div className="greetings__button-box">
          <Button onClick={handleClick}>
            {isLogined ? logoutButtonText : "Войти"}
          </Button>
          <Button variant="outline" onClick={() => navigate("/contacts")}>
            {contactsButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
