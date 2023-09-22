import imageP1 from "../images/HeroesAppBanner.png";
import imageP2 from "../images/JournalAppBanner.png";
import imageP3 from "../images/WeatherAppBanner.png";
import imageP4 from "../images/MusicPlayerAppBanner.png";

// const maxCaractere = 100;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, a ipsa atque possimus dicta natus accusantium quasi incidunt! Porro officia nisi esse tempore. Amet maxime animi illo laborio sam error? si cuentame mas porque no entiendo nada"

export const Cards = ({ maxCaractere }) => {
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

    // const onClickCard = (link) => {
    //   console.log(link)
    // }

    return (
        <div className="project-cards">
            <a href='https://github.com/JsonRodriguez/Heroes-App' target="_blank" className="project-card zoomHover scaleHoverCard">
              <img className="imageProject" src={ imageP1 } alt="HeroesApp" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Marvel and DC Heroes</h2>   
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength("It is an app where we have different features and styles to enjoy Marvel and DC Heroes.") }</p>
              </div>
            </a>
            <a href='https://github.com/JsonRodriguez/JournalApp' target="_blank"  className="project-card zoomHover scaleHoverCard">
              <img className="imageProject" src={ imageP2 } alt="JournalApp" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Journal Application</h2>   
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength("Application to save annotations with image attachments.") }</p>
              </div>
            </a>
            <a href='https://github.com/JsonRodriguez/WeatherApp' target="_blank"  className="project-card zoomHover scaleHoverCard">
              <img className="imageProject" src={ imageP3 } alt="Projet 3" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Weather Api App</h2>   
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength("Application to know the weather of the country that you want, using a API from OpenWeather.") }</p>
              </div>
            </a>
            <a href='https://github.com/JsonRodriguez/Music-Player' target="_blank"  className="project-card zoomHover scaleHoverCard">
              <img className="imageProject" src={ imageP4 } alt="Projet 4" />
              <div className="projectHeader">
                <div className="titleProject">
                  <h2>Music Player</h2>   
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{ calculateMaxLength("Its a Music Player to enjoy your favorite songs.") }</p>
              </div>
            </a>
          </div>
    )
}
