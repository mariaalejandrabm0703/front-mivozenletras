import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("El titulo es obligatorio."),
  description: Yup.string().required("La descripción es obligatorio."),
});
type TextTypeProps = {
  refreshText: Function;
};

function TextForm({ refreshText }: TextTypeProps) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const options = {
        method: "POST",
        body: JSON.stringify({
          title: values.title,
          description: values.description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(`https://mivozenletras.fly.dev/api/v1/texts/save`, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false) {
            toast.error(data.message);
            return;
          }
          if (Boolean(data) === true) {
            localStorage.setItem("texts/save", data);
            toast.success("Texto registrado exitosamente.");
            formik.resetForm();
            refreshText();
          } else {
            toast.error("No se ha podido registrar texto.");
          }
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center py-2 rounded-lg border border-gray-300"
    >
      <div className="flex flex-col w-full p-4">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Titulo"
          className="py-2 px-2 mb-5 bg-blue-100 rounded-lg text-black text-bold"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <div className="text-red-500 text-xs">{formik.errors.title}</div>
        )}
        <textarea
          id="description"
          name="description"
          placeholder="Publica tus pensamientos ..."
          className="py-2 px-6 bg-blue-100 rounded-lg text-black text-bold"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description && (
          <div className="text-red-500 text-xs">
            {formik.errors.description}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="px-16 py-2 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}

export default TextForm;
