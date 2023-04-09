import getFormattedDate from "../helper/formatDate";

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

const getListText = (texts: Text[]) => {
    const listText: Array<DateListText> = [];
    const groupedObjects: { [key: string]: Text[] } = {};

    texts.forEach((text: Text) => {
        const date = getFormattedDate(new Date(text.dateRegister));
        const dateCompare = date.split("/")[0];
        const newText = {
            title: text.title,
            description: text.description,
            dateRegister: date.split("/")[0],
            dateTime: date.split("/")[1],
            id: text.id,
        };
        if (!groupedObjects[dateCompare]) {
            groupedObjects[dateCompare] = [];
        }
        groupedObjects[dateCompare].push(newText);
    });

    for (const key in groupedObjects) {
        const newText: DateListText = {
            listText: groupedObjects[key],
            dateRegister: groupedObjects[key][0].dateRegister,
        };
        listText.push(newText);
    }
    return listText;
};

export default getListText;