import { useAppSelector } from "@/store";
import { Navigate } from "react-router";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import Title from "@/components/Title/Title";
import "./PersonalAccount.css";

export default function PersonalAccount() {
  const { userName, isLogined } = useAppSelector((store) => store.user);

  if (!isLogined) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="container">
        <div>
          <Title className="personal-account__title">
            Привет, {userName || "пользователь"}
          </Title>
          <ActionButtons
            contactsButtonText="Перейти в контакты"
            logoutButtonText="Выйти из аккаунта"
          />
        </div>
      </div>
    );
  }
}
