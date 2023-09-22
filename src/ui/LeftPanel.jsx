
import { ProjectsPhone } from "./ProjectsPhone";
import { Description } from "./Description";
import { LeftPanelContact } from "./LeftPanelContact";
import { useLeftPanel } from "../hooks";


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
                            <div className="buttons-description">
                                <div className="buttonsResponsive">
                                    <button onClick={onProjects} className="buttonProjects zoomHover scaleHoverCard">Projects {<i className="fa-solid fa-code"></i>}</button>
                                    <button onClick={onTalk}  className="buttonContact zoomHover scaleHoverCard">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                                </div>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftProjects') {
                    return (
                        <>
                            <ProjectsPhone />
                            <div className="buttons-description">
                                <div className="buttonsResponsive">
                                    <button onClick={onDescription} className="buttonProjects zoomHover scaleHoverCard">Description {<i className="fa-regular fa-circle-user"></i>}</button>
                                    <button onClick={onTalk}  className="buttonContact zoomHover scaleHoverCard">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                                </div>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftContact'){
                    return (
                        <>
                            <LeftPanelContact />
                            <button 
                                className="btnGoBack zoomHover scaleHoverCard"
                                onClick={onDescription}
                            >
                                Description
                            </button>
                        </>)
                }
            })()}
        </div>
    )
}
