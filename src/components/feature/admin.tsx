import TextList from "../moleculas/list-text";
import LoginForm from "../moleculas/login";
import TextForm from "../moleculas/save";

function AdminText() {
  return (
    <div className="container mx-auto">
    <h1>Administrado de textos</h1>
    <LoginForm />
    <TextForm />
    <TextList dateRegister="Martes 4 e abril del 2023"/>
    </div>
  );
}

export default AdminText;
