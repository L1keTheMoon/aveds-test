import { Route, BrowserRouter, Routes } from "react-router";
import { useAppSelector } from "@/store";
import Header from "./components/Header/Header";
import Main from "@/pages/Main/Main";
import NotFound from "@/pages/NotFound/NotFound";
import PersonalAccount from "@/pages/PersonalAccount/PersonalAccount";
import Contacts from "@/pages/Contacts/Contacts";
import LogInForm from "@/components/LogInForm/LogInForm";
import Modal from "@/components/Modal/Modal";
import "./App.css";

function App() {
  const { isModalOpen } = useAppSelector((store) => store.modal);

  return (
    <BrowserRouter basename="/aveds-test/">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personal-account" element={<PersonalAccount />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {isModalOpen && (
        <Modal title="Авторизация">
          <LogInForm />
        </Modal>
      )}
    </BrowserRouter>
  );
}

export default App;
