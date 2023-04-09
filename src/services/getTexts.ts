import getFormattedDate from "../helper/formatDate"

const TEXTS_ENDPOINT = 'https://mivozenletras.fly.dev/api/v1'

type Text = {
    title: string,
    description: string,
    dateRegister: string,
    dateTime: string,
    _id: string,
}

export const getText = async () => {
    const res = await fetch(`${TEXTS_ENDPOINT}/texts/list`)
    const listText: Text[] = await res.json()
    return listText.map((text: Text) => {
        const date = new Date(text.dateRegister)
        const formattedDate: string = getFormattedDate(date);

        return {
            title: text.title,
            description: text.description,
            dateRegister: text.dateRegister,
            dateTime: formattedDate.split('/')[1],
            id: text._id
        }
    })
}