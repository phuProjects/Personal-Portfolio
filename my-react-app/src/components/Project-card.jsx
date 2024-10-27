
export default function Project_card({name, date, description}){

    return(
        <div className="card">
            <h2>{name}</h2>
            <h3>{date}</h3>
            <div>{description}</div>
        </div>
    )
}