import { useState } from "react"

export const useLeftPanel = () => {

    const [leftPanel, setLeftPanel] = useState('leftDescription');

    const onProjects = () => {
        setLeftPanel('leftProjects');
    }

    const onTalk = () => {
        setLeftPanel('leftContact');
    }

    const onDescription = () => {
        setLeftPanel('leftDescription');
    }

    return{
        leftPanel,
        onDescription,
        onProjects,
        onTalk
    };
}
