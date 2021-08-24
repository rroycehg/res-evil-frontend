

function CharacterCard({name, affiliation, bio, img }) {

 


console.log(img)

return (
    <div>
        <p>{name}</p>
        <p>{affiliation}</p>
        <img src={img}></img>
    </div>
)
}



export default CharacterCard