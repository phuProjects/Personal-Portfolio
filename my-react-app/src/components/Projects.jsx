import Project_card from './Project-card.jsx'

export default function Projects(){
    const card = Project_card()

    return(
        <div id="projects" className="projects-page">
            <h1>My projects</h1>
            {card}
            {card}
        </div>
    )
}