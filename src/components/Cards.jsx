import { projectsData } from "../data/projectsData";
import { Card } from "./Card";

export const Cards = ({ maxCaractere }) => {
  return (
    <div className="project-cards">
      {
        projectsData.map( project => <Card key={ project.id } { ...project } maxCaractere={ maxCaractere } /> )
      }
    </div>
  )
}
