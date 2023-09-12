import { Form } from "../components/Form"
import { useLeftPanel } from "../hooks"

export const LeftPanelContact = () => {

    const { setLeftPanel } = useLeftPanel();

    const btnGoBack = () => {
        setLeftPanel('leftDescription');
    }

    return (
        <div className="LeftPanel-contact-container">
            <Form />
        </div>
    )
}
