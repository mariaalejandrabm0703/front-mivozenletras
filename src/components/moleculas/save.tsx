
function TextForm() {
  return (
    <div>
      <input
        className="h-40px text-18px px-10px border border-solid border-gray-300 rounded-l-md"
        type="text"
        placeholder="Escribe aquí..."
      />
      <button className="bg-blue-500 text-white text-18px h-40px border-none rounded-r-md px-5 cursor-pointer">
        Enviar
      </button>
    </div>
  );
}

export default TextForm;
