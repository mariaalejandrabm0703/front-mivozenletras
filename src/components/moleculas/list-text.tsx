import Text from "./text";

type TypeTextList = {
    dateRegister: string,

}
const text = `Sed non nibh iaculis, posuere diam vitae, consectetur neque.
Integer velit ligula, semper sed nisl in, cursus commodo elit.
Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.`

const TextList = ({dateRegister}: TypeTextList) => {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {dateRegister}
          </h1>
        </div>
        <Text title="Titulo" description={text}/>
      </article>
  );
};

export default TextList;