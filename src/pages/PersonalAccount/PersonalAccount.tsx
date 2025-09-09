import { useAppSelector } from "@/store";
import { Navigate } from "react-router";
import UserGreetings from "@/components/UserGreetings/UserGreetings";

export default function PersonalAccount() {
  const { userName, isLogined } = useAppSelector((store) => store.user);

  if (!isLogined) {
    return <Navigate to="/" />;
  } else {
    return (
      <UserGreetings
        titleText={`Привет, ${userName || "пользователь"}`}
        contactsButtonText="Перейти в контакты"
        logoutButtonText="Выйти из аккаунта"
      />
    );
  }
}
