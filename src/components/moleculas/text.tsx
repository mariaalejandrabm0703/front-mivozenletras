
type TextType ={
    description: string
    date?: string
}


const Text = (props: TextType) => {
  return (
    <div
      className="flex items-center bg-white shadow-md p-4"
    >
      <div
        className="mr-4 border border-gray-300 rounded-full flex justify-center items-center w-8 h-8"
      >
        <i
          className="material-icons text-gray-500 text-sm"
        >
        </i>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-600 text-sm">
        {props.description}
        </span>
      </div>
    </div>
  );
};

export default Text;