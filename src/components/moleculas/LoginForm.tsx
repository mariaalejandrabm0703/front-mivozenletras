function LoginForm() {
  return (
    <form className="flex flex-col items-center py-2 rounded-lg border border-gray-300">
      <div className="grid grid-cols-2">
        <div className="p-6">
          <div className="flex flex-col w-full mb-6">
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              id="email"
              type="email"
              placeholder="Correo electrónico"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col w-full mb-6">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              className="py-2 px-6 bg-gray-200 rounded-lg focus:outline-none"
              required
            />
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
