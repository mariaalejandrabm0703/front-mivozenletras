import { useEffect, useState } from "react";
import { getText } from "../services/getTexts";

type Text = {
    title: string,
    description: string,
    dateRegister: string,
    id: string
}

export function usetTexts() {
    const [ texts, setTexts ] = useState(Array<Text>)

    const refreshText = () => {
        getText().then( newTexts => setTexts(newTexts))
    };
    useEffect( refreshText, [])

    return { texts, refreshText }
}