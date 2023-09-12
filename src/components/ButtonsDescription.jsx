import { useLeftPanel, useContainer } from "../hooks";
import { SocialMedia } from "./SocialMedia";

export const ButtonsDescription = () => {

    // const 
    // { 
    //     container, 

    //     title, 
    //     button,
    //     titleIcon,
    //     buttonIcon,
    //     onChangeContainer
    // }  = useContainer();

    const { setLeftPanel } = useLeftPanel();

    const onProjects = () => {
        console.log("project");
        setLeftPanel('leftProjects');
    }

    const onTalk = () => {
        console.log("talk");
        setLeftPanel('leftContact');
    }

    return (
        <div className="buttons-description">
            <SocialMedia />
            <div className="buttonsResponsive">
                <button onClick={onProjects} className="buttonProjects">Projects {<i className="fa-solid fa-code"></i>}</button>
                <button onClick={onTalk}  className="buttonContact">Let's Talk <i className="fa-regular fa-envelope"></i></button>
            </div>
        </div>
    )
}
