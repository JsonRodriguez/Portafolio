
import { ProjectsPhone, Description, LeftPanelContact } from "./";
import { useLeftPanel } from "../hooks";
import { SocialMedia } from "../components";


export const LeftPanel = () => {

    const {
        leftPanel,
        onDescription,
        onProjects,
        onTalk
    } = useLeftPanel();

    return (
        <div className="leftPanel">
            {(() => {
                if (leftPanel === 'leftDescription') {
                    return ( 
                        <>
                            <Description />
                            <div className="buttonsResponsive">
                                <button onClick={onProjects} className="buttonProjects zoomHover scaleHoverCard">Projects {<i className="fa-solid fa-code"></i>}</button>
                                <button onClick={onTalk}  className="buttonContact zoomHover scaleHoverCard">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftProjects') {
                    return (
                        <>
                            <ProjectsPhone />
                            <div className="buttonsResponsive">
                                <button onClick={onDescription} className="buttonProjects zoomHover scaleHoverCard">Description {<i className="fa-regular fa-circle-user"></i>}</button>
                                <button onClick={onTalk}  className="buttonContact zoomHover scaleHoverCard">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftContact'){
                    return (
                        <>
                            <LeftPanelContact />
                            <div className="buttons-description">
                                <SocialMedia />
                            </div>
                            <div className="buttonsResponsive">
                                <button onClick={onProjects}  className="buttonProjects zoomHover scaleHoverCard">Projects <i className="fa-solid fa-code"></i></button>
                                <button onClick={onDescription} className="buttonContact zoomHover scaleHoverCard">Description {<i className="fa-regular fa-circle-user"></i>}</button>
                            </div>
                        </>)
                }
            })()}
        </div>
    )
}
