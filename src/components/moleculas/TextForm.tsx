function TextForm() {
  return (
    <div className="flex flex-col items-center py-2 rounded-lg border border-gray-300">
      <div className="flex flex-col w-full p-4">
        <textarea
          id="nombre"
          placeholder="Publica tus pensamientos ..."
          className="p-2 bg-gray-200 rounded-lg focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-16 py-2 text-white bg-gray-500 rounded-lg font-semibold hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Enviar
      </button>
    </div>
  );
}

export default TextForm;
