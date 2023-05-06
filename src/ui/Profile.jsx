import imageProfile from "../images/profile.jpg";

export const Profile = () => {
    return (
        <div className="description">
            <img className="perfil-photo" src={imageProfile} alt="Image Profile" />
            <h1 className="name">Json Rodríguez</h1>
            <p className="profession">FrontEnd Developer</p>
            <hr />
            <h3 className="about-me">About me</h3>
            <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et illo dicta, debitis amet libero saepe cumque facere expedita vero maiores excepturi dolorem magnam vitae quibusdam totam nostrum quae adipisci autem!</p>
            <div className="buttons-description">
                <div className="buttonsSocialMedia">
                <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
                <div className="buttonsResponsive">
                <button className="buttonProjects">Projects <i class="fa-solid fa-code"></i></button>
                <button className="buttonContact">Let's Talk <i class="fa-regular fa-envelope"></i></button>
                </div>
            </div>
        </div>
    )
}
