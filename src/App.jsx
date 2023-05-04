import "./styles.css";
import imageProfile from "./images/profile.jpg";
import imageP1 from "./images/imageP1.png";
import imageP2 from "./images/imageP2.png";
import imageP3 from "./images/imageP3.png";
import imageP4 from "./images/imageP4.jpg";

const maxCaractere = 200;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, a ipsa atque possimus dicta natus accusantium quasi incidunt! Porro officia nisi esse tempore. Amet maxime animi illo laborio sam error? si cuentame mas porque no entiendo nada"


export const App = () => {
  // const newText = text.length > maxCaractere ? text.slice(0, maxCaractere) + '...' : text;
  // const newText='';
  const calculateMaxLength = (text) => {
    if( text.length > maxCaractere ){
      for (let i = maxCaractere; i > 1; i--) {
        if(text.slice(i-1,i)===' '){
          return text.slice(0,i-1)+'...';
        }
      }
    }else{
      return text;
    }
  }
  calculateMaxLength(text);

  return (
    <main>
      <div className="container">
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
        <div className="projects">
          <div className="header">
            <h1>Projects <i class="fa-solid fa-code"></i></h1>
            <button className="contact">Let's Talk <i class="fa-regular fa-envelope"></i></button>
          </div>
          
          <ul className="navbar">
            <li><input id="cb1" type="checkbox" /><label htmlFor="cb1"><i class="fa-brands fa-react"></i> React</label></li>
            <li><input id="cb2" type="checkbox" /><label htmlFor="cb2"><i class="fa-brands fa-square-js"></i> JavaScript</label></li>
            <li><input id="cb3" type="checkbox" /><label htmlFor="cb3"><i class="fa-brands fa-html5"></i> HTML</label></li>
            <li><input id="cb4" type="checkbox" /><label htmlFor="cb4"><i class="fa-brands fa-css3-alt"></i> CSS</label></li>
          </ul>

          <div className="project-cards">
            <div className="project-card">
              <img className="imageProject" src={ imageP1 } alt="Projet 1" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Project 1</h2>   
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength(text) }</p>
              </div>
            </div>
            <div className="project-card">
              <img className="imageProject" src={ imageP2 } alt="Projet 2" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Project 2</h2>   
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength(text) }</p>
              </div>
            </div>
            <div className="project-card">
              <img className="imageProject" src={ imageP3 } alt="Projet 3" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Project 3</h2>   
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength(text) }</p>
              </div>
            </div>
            <div className="project-card">
              <img className="imageProject" src={ imageP4 } alt="Projet 4" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Project 4</h2>   
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength(text) }</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  )
}

