
export const Card = ({ image, url, title, description, maxCaractere = 125 }) => {

    const calculateMaxLength = ( text ) => {
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

    return (
        <a href={ url } target="_blank"  className="project-card zoomHover scaleHoverCard">
            <div className="cardImage">
                <img className="imageProject" src={ image } alt={ title } />
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            <h2>{ title }</h2>
            <p>{ calculateMaxLength( description ) }</p>
        </a>
    )
}
