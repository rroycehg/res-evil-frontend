

function CharacterCard({name, affiliation, bio, img }) {

 




return (
    <div>
        <p>{name}</p>
        <p>{affiliation}</p>
        <p>{bio}</p>
        <img src={img}></img>
    </div>
)
}



export default CharacterCard