import Card from "@/components/Card/Card";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import Title from "@/components/Title/Title";
import { cards } from "./cards";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="container">
        <div>
          <Title>Место для получения медицинской помощи</Title>
          <ActionButtons
            contactsButtonText="Контакты"
            logoutButtonText="Выйти"
          />
        </div>
      </div>
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
