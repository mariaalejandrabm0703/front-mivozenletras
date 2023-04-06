
function LoginForm() {
  return (
    <form className="flex flex-col items-center p-8 bg-gray-100">
      <h3 className="mb-4 font-semibold text-lg">Iniciar sesión</h3>
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="nombre" className="mb-2 font-semibold">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          className="p-2 border border-gray-300 rounded-sm focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="email" className="mb-2 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Ingrese su correo electrónico"
          className="p-2 border border-gray-300 rounded-sm focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-col w-full mb-8">
        <label htmlFor="password" className="mb-2 font-semibold">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="Ingrese su contraseña"
          className="p-2 border border-gray-300 rounded-sm focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 text-white bg-blue-500 rounded-sm font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;
