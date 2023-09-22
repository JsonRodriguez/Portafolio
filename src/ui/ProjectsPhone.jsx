import { ButtonsDescription, Cards, NavBar } from "../components"

export const ProjectsPhone = () => {
    return (
        <div className="projectsPhone">
            <h1>Projects <i className="fa-regular fa-envelope"></i></h1>
            {/* <NavBar /> */}
            <Cards maxCaractere={75} />
            {/* <ButtonsDescription /> */}
        </div>
    )
}
