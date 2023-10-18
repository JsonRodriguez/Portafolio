import { Form } from "../components/Form"
import { useLeftPanel } from "../hooks"

export const LeftPanelContact = () => {

    const { setLeftPanel } = useLeftPanel();

    const btnGoBack = () => {
        setLeftPanel('leftDescription');
    }

    return (
        <>
            <h1 className="LeftPanelContactTitle" >Let's Talk</h1>
            <div className="LeftPanel-contact-container">
                <Form />
            </div>
        </>
    )
}
