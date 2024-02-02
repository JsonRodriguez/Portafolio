
export const Card = ({ image, urlGit, urlPage, title, description, maxCaractere}) => {

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
        // <a href={ url } target="_blank"  className="project-card zoomHover scaleHoverCard">
        //     <div className="cardImage">
        //         <img className="imageProject" src={ image } alt={ title } />
        //         <i className="fa-solid fa-arrow-up-right-from-square"></i>
        //     </div>
        //     <h2>{ title }</h2>
        //     <p>{ calculateMaxLength( description ) }</p>
        // </a>
        <div className="project-card zoomHover">
            <img className="imageProject" src={ image } alt={ title } />
            <h2>{ title }</h2>
            <p>{ calculateMaxLength( description ) }</p>
            <div className="hoverLinkCard">
                <span>
                    <a target="_blank" rel="noreferrer" href={ urlGit }><i className="fa-brands fa-github"></i></a>
                </span>
                {
                    (urlPage !== 'none') && 
                    <span>
                        <a target="_blank" rel="noreferrer" href={ urlPage }><i className="fa-regular fa-window-restore"></i></a>
                    </span>
                }
            </div>
        </div>
    )
}
