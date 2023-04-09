import Text from "./Text";

type TypeTextList = {
  title: string,
  description: string,
  dateTime: string,
  dateRegister: string
};

const TextList = ({ title, description, dateTime, dateRegister }: TypeTextList) => {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          {dateRegister}
        </h1>
      </div>
      <Text title={title} description={description} dateTime={dateTime}/>
    </article>
  );
};

export default TextList;
