
import { ProjectsPhone } from "./ProjectsPhone";
import { Description } from "./Description";
import { LeftPanelContact } from "./LeftPanelContact";
import { useLeftPanel } from "../hooks";
import { useState } from "react";


export const LeftPanel = () => {

    // const { getLeftPanel, setLeftPanel } = useLeftPanel();
    // const [leftPanel, setLeftPanel] = useState('leftDescription');

    // const onProjects = () => {
    //     setLeftPanel('leftProjects');
    // }

    // const onTalk = () => {
    //     setLeftPanel('leftContact');
    // }

    // const onDescription = () => {
    //     setLeftPanel('leftDescription');
    // }

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
                    console.log('LeftDescription')
                    return ( 
                        <>
                            <Description />
                            <div className="buttons-description">
                                <div className="buttonsResponsive">
                                    <button onClick={onProjects} className="buttonProjects">Projects {<i className="fa-solid fa-code"></i>}</button>
                                    <button onClick={onTalk}  className="buttonContact">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                                </div>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftProjects') {
                    console.log('leftProjects')
                    return (
                        <>
                            <ProjectsPhone />
                            <div className="buttons-description">
                                <div className="buttonsResponsive">
                                    <button onClick={onDescription} className="buttonProjects">Description {<i className="fa-regular fa-circle-user"></i>}</button>
                                    <button onClick={onTalk}  className="buttonContact">Let's Talk <i className="fa-regular fa-envelope"></i></button>
                                </div>
                            </div>
                        </>
                    )
                } else if (leftPanel === 'leftContact'){
                    console.log('leftContact')
                    return (
                        <>
                            <LeftPanelContact />
                            <button 
                                className="btnGoBack"
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
