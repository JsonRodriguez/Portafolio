import imageP1 from "../images/imageP1.png";
// import imageP2 from "../images/imageP2.png";
// import imageP3 from "../images/imageP3.png";
// import imageP4 from "../images/imageP4.jpg";

const maxCaractere = 200;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi, a ipsa atque possimus dicta natus accusantium quasi incidunt! Porro officia nisi esse tempore. Amet maxime animi illo laborio sam error? si cuentame mas porque no entiendo nada"

export const Cards = () => {
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
            {/* <div className="project-card">
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
            </div> */}
            
          </div>
    )
}
