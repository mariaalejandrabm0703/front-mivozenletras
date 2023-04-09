import { useEffect, useState } from "react";
import TextList from "../moleculas/ListText";
import LoginForm from "../moleculas/LoginForm";
import TextForm from "../moleculas/TextForm";

function AdminText() {
  const [isLogin, setisLogin] = useState(false);

  const getLogin = () => {
    setisLogin(Boolean(localStorage.getItem("login")));
  };

  useEffect(() => {
    getLogin();
  }, [isLogin]);

  return (
    <div className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      {isLogin ? <TextForm /> : <LoginForm setisLogin={setisLogin} />}
      <TextList dateRegister="Martes 4 e abril del 2023" />
    </div>
  );
}

export default AdminText;
