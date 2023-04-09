import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio."),
  email: Yup.string()
    .email("Introduce una dirección de correo válida.")
    .required("El correo electrónico es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});

type LoginTypeProps = {
  setisLogin: Function;
};

function LoginForm({ setisLogin }: LoginTypeProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const options = {
        method: "POST",
        body: JSON.stringify({
          fullName: values.name,
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(`${import.meta.env.VITE_URL_API}/login`, options)
        .then((response) => response.json())
        .then((data) => {
          if(data.success === false){
            toast.error(data.message)
            return
          }
          if (Boolean(data) === true) {
            setisLogin(Boolean(data));
            localStorage.setItem("login", data);
            toast.success('Inicio de sesión exitoso.')
          } else {
            toast.error('No se ha podido iniciar sesión.')
          }
        });
    },
  });
  return (
    <form
      className="flex flex-col items-center py-2 rounded-lg border border-gray-300"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-2">
        <div className="p-6">
          <div className="flex flex-col w-full mb-6">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-xs">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo electrónico"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col w-full mb-6">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-xs">
                {formik.errors.password}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-20 py-2 text-white bg-gray-500 rounded-lg font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Ingresar
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
