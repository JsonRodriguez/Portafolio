import { Contact, Projects } from "../ui";
import { useContainer } from "../hooks";
import { Description } from "./Description";

export const RightPanel = () => {

    const 
    { 
        container, 
        title, 
        button,
        titleIcon,
        buttonIcon,
        onChangeContainer
    }  = useContainer();

    return (
      <>
        <div className="leftPanelMain">
          <Description />
        </div>
        <div className="mainContainer">
          <header className="header">
            <h1>{title} <i className={titleIcon}></i></h1>
            <button onClick={ onChangeContainer } className="contact zoomHover scaleHoverCard">{button} <i className={buttonIcon}></i></button>
          </header>
          {
            container === 'projects' ? <Projects /> : <Contact />
          }
        </div>
      </>
    )
}
