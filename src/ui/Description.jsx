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
                <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et illo dicta, debitis amet libero saepe cumque facere expedita vero maiores excepturi dolorem magnam vitae quibusdam totam nostrum quae adipisci autem!</p>
            </div>
            <div className="buttons-description">
                <SocialMedia />
            </div>
        </>
    )
}
