import imageProfile from "../images/profile.jpg";
import { ButtonsDescription } from "../components";
import { SocialMedia } from "../components/SocialMedia";

export const Description = () => {
    return (
        <>
            <div className="description">
                <img className="perfil-photo" src={imageProfile} alt="Image Profile" />
                <h1 className="name">Json Rodríguez</h1>
                <p className="profession">FrontEnd Developer</p>
                <hr />
                <h3 className="about-me">About me</h3>
                <p className="description-text">👨‍💻 I'm a passionate and creative frontend programmer with experience in UI design. 💡 I'm constantly learning and adapting to the latest technological trends. If you're looking for a dedicated professional in constant growth for your company, I'm ready to help you achieve your goals. 🚀😊.</p>
            </div>
            <div className="buttons-description">
                <SocialMedia />
            </div>
        </>
    )
}
