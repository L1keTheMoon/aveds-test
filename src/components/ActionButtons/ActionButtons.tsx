import useLogInButton from "@/hooks/useLogInButton";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router";
import "./ActionButtons.css";

interface ActionButtonsProps {
  contactsButtonText: string;
  logoutButtonText: string;
}

export default function ActionButtons({
  contactsButtonText,
  logoutButtonText,
}: ActionButtonsProps) {
  const navigate = useNavigate();
  const { isLogined, handleClick } = useLogInButton();

  return (
    <div className="action-buttons">
      <Button onClick={handleClick}>
        {isLogined ? logoutButtonText : "Войти"}
      </Button>
      <Button variant="outline" onClick={() => navigate("/contacts")}>
        {contactsButtonText}
      </Button>
    </div>
  );
}
