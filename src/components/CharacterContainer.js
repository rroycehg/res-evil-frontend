import CharacterCard from "./CharacterCard"
import CharDisplay from "./CharDisplay"

function CharacterContainer({characters}) {

    console.log(characters)
    return (
        <div>
        <CharDisplay />
        {characters.map(char => 
            <CharacterCard 
                key={char.id}
                name={char.name}
                affiliation={char.affiliation}
                bio={char.bio}
                img={char.img}
            />
        )}
       
        </div>
    )

}

export default CharacterContainer