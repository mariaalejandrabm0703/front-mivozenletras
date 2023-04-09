import { usetTexts } from "../../hooks/useTexts";
import getListText from "../../services/formatListTexts";
import TextList from "../moleculas/ListText";

type DateListText = {
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

function Home() {
  const { texts } = usetTexts();
  const listText: Array<DateListText> = getListText(texts);

  return (
    <div className="container mx-auto">
      {listText &&
        listText.map((text: DateListText) => (
          <TextList
            key={text.dateRegister}
            listText={text.listText}
            dateRegister={text.dateRegister}
          />
        ))}
    </div>
  );
}

export default Home;
