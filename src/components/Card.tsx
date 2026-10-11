import type { WoWCharacter } from "../data/data"

// destructuring the character props to access the info displayed on each card
export default function Card({ 
    name,
    characterClass,
    race, 
    specialization, 
    level 
}: WoWCharacter) {    
    return (        
        <div>
            <h2>{name}</h2>
            <h3>Level {level} {race} </h3>
            <h3>{specialization} {characterClass}</h3>
        </div>               
    )
}
