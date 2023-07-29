type TextTypeProps = {
  title: string;
  description: string;
  dateTime: string;
};

const Text = ({ title, description, dateTime }: TextTypeProps) => {
  return (
    <div className="pt-12 border-t dark:border-gray-700">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src="/pictures/tree1.jpeg"
          alt="imagen-tree"
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="dark:text-gray-400"> {description}</p>
          <p className="mt-2 text-gray-400 text-xs"> {dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Text;
