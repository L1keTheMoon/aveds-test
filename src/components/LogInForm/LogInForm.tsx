import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/store";
import { logIn } from "@/store/userSlice";
import { switchModal } from "@/store/modalSlice";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import type { User } from "@/types/types";
import "./LogInForm.css";

export default function LogInForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setError(
        "Пароль должен содержать как минимут 8 символов среди которых одна цифра, одна строчная и одна заглавная буква!"
      );
      console.log("object");
      return;
    }
    fetch("/src/data/users.json")
      .then((response) => response.json())
      .then((jsonData: { users: User[] }) => {
        const user = jsonData.users.find((user) => user.login === login);
        if (!user) {
          setError("Пользователя с таким логином не существует!");
        } else {
          if (user.password === password) {
            dispatch(logIn(user.name));
            dispatch(switchModal());
            navigate("/personal-account");
          } else {
            setError("Не верный пароль!");
          }
        }
      });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        type="text"
        autoComplete="username"
        value={login}
        name="login"
        placeholder="Логин"
        onChange={(e) => {
          setError("");
          setLogin(e.target.value);
        }}
      />
      <Input
        type="password"
        value={password}
        name="password"
        placeholder="Пароль"
        onChange={(e) => {
          setError("");
          setPassword(e.target.value);
        }}
      />
      {error && <p className="form__error">{error}</p>}
      <Button>Войти</Button>
    </form>
  );
}
