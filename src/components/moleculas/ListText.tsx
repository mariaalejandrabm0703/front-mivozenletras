import Text from "./Text";

type DateListTextTypeProps = {
  dateRegister: string;
  listText: Text[];
};

type Text = {
  title: string;
  description: string;
  dateRegister: string;
  dateTime: string;
  id: string;
};

const TextList = ({ listText, dateRegister }: DateListTextTypeProps) => {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-4xl">
          {dateRegister}
        </h1>
      </div>
      {listText &&
        listText.map((text: Text) => (
          <Text
            key={text.id}
            title={text.title}
            description={text.description}
            dateTime={text.dateTime}
          />
        ))}
    </article>
  );
};

export default TextList;
