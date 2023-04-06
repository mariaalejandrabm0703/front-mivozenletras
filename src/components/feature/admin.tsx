import TextList from "../moleculas/list-text";
import LoginForm from "../moleculas/login";
import TextForm from "../moleculas/save";

function AdminText() {
  return (
    <>
    <h1>Administrado de textos</h1>
    <LoginForm />
    <TextForm />
    <TextList />
    </>
  );
}

export default AdminText;
