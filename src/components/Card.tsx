import type { WoWCharacter } from "../data/data"
import { classes, raceImages } from "../data/data"

// destructuring the character props to access the info displayed on each card
export default function Card({ 
    name,
    characterClass,
    race, 
    specialization, 
    level 
}: WoWCharacter) {   
    // verifies which class's property value to use for the css style change
    const classInfo = classes.find((wowClass) => wowClass.name === characterClass)
    
    return (        
        <div className="Card" style={{color: classInfo?.color}}>
            <h2>{name}</h2>
            <br/>
                <div className="characterIcons">
                    <img src={raceImages[race]} alt={`${race} portait`}/>
                    <img src={classInfo?.icon} alt={`${classInfo?.name} icon`}/>
                </div>   
            <br/>
            <h3>Level {level} {race} </h3>
            <h3>{specialization} {characterClass}</h3>
        </div>               
    )
}
