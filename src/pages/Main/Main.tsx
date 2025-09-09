import Card from "@/components/Card/Card";
import UserGreetings from "@/components/UserGreetings/UserGreetings";
import { cards } from "./cards";
import "./Main.css";

export default function Main() {
  return (
    <>
      <UserGreetings
        titleText="Место для получения медицинской помощи"
        contactsButtonText="Контакты"
        logoutButtonText="Выйти"
      />
      <ul className="services">
        {cards.map((card) => (
          <li key={card.title}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </>
  );
}
