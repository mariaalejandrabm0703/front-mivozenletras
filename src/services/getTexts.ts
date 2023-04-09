const TEXTS_ENDPOINT = 'https://mivozenletras.fly.dev/api/v1'

type Text = {
    title: string,
    description: string,
    dateRegister: string,
    _id: string,
}

export const getText = async () => {
    const res = await fetch(`${TEXTS_ENDPOINT}/texts/list`)
    const listText: Text[] = await res.json()
    return listText.map((text: Text) => {
        return {
            title: text.title,
            description: text.description,
            dateRegister: text.dateRegister,
            id: text._id
        }
    })
}