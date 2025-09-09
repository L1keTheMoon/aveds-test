import type { Card } from "@/types/types";
import "./Card.css";

export default function Card({ image, title, text }: Card) {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="card-icon" />
      <h5 className="card__title">{title}</h5>
      <div className="card__divider" />
      <p className="card__text">{text}</p>
    </div>
  );
}
