import { useEffect, useState } from "react";
import TextList from "../moleculas/ListText";
import LoginForm from "../moleculas/LoginForm";
import TextForm from "../moleculas/TextForm";
import { usetTexts } from "../../hooks/useTexts";
import getListText from "../../services/formatListTexts";

type DateListText = {
  dateRegister: string;
  listText: Text[];
};

type Text = {
  title: string;
  description: string;
  dateRegister: string;
  dateTime: string;
  id: string;
};

function AdminText() {
  const [isLogin, setisLogin] = useState(false);
  const { texts, refreshText } = usetTexts();
  const listText: Array<DateListText> = getListText(texts);

  const getLogin = () => {
    setisLogin(Boolean(localStorage.getItem("login")));
  };

  useEffect(() => {
    getLogin();
  }, [isLogin]);

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      <div className="px-28 flex-auto">
        <h1 className="text-4xl font-bold leading-tight md:text-4xl">
          ¡Hola vida, bienvenida!
        </h1>
        <p className="mt-2 text-gray-400 text-xs">¿Qué quieres contarme hoy?</p>
      </div>
      {isLogin ? <TextForm refreshText={refreshText} /> : <LoginForm setisLogin={setisLogin} />}
      {listText &&
        listText.map((text: DateListText) => (
          <TextList
            key={text.dateRegister}
            listText={text.listText}
            dateRegister={text.dateRegister}
          />
        ))}
    </div>
  );
}

export default AdminText;
