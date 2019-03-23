import React from 'react'
import './StarWars.css';


function Character(props){
    return(
        <div className = 'character'>
            <div className = 'name'>
            {props.character.name}
            </div>

            <div className = 'character-data'>
                Gender: {props.character.gender}
            </div>

            <div className = 'character-data'>
                Birth: {props.character.birth_year}
            </div>

            <div className = 'character-data'>
                Mass:{props.character.mass}
            </div>
        </div>
    )
}

export default Character;