import { initialCharacters } from "../data/data"
import Card from "./Card"

export default function CardContainer() {
    return (
        <div className="CardContainer">
            {initialCharacters.map((character) => (
                <Card key={character.id} {...character}/>
            ))}
        </div>
    )        
}
