import { ButtonsDescription, Cards, NavBar } from "../components"

export const ProjectsPhone = () => {
    return (
    <>
        <h1>Projects <i className="fa-regular fa-envelope"></i></h1>
        <div className="projectsPhone">
            {/* <NavBar /> */}
            <Cards maxCaractere={75} />
            {/* <ButtonsDescription /> */}
        </div>
    </>
    )
}
