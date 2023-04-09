import { usetTexts } from "../../hooks/useTexts";
import TextList from "../moleculas/ListText";

type Text = {
  title: string;
  description: string;
  dateRegister: string;
  id: string;
};

function Home() {
  const { texts } = usetTexts();
  
  return (
    <div className="container mx-auto">
      {texts &&
        texts.map((text: Text) => (
          <TextList
            key={text.id}
            title={text.title}
            description={text.description}
            dateRegister={text.dateRegister}
          />
        ))}
    </div>
  );
}

export default Home;
