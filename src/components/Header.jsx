import { useContainer } from "../hooks/useContainer"

export const Header = () => {

    const { container, onChangeContainer } = useContainer();

    if( container )
    {
        return(
            <header className="header">
                <h1>Projects <i class="fa-solid fa-code"></i></h1>
                <button onClick={ onChangeContainer } className="contact">Let's talk <i class="fa-regular fa-envelope"></i></button>
            </header>
        )
    }else
    return (
        <header className="header">
            <h1>Let's talk <i class="fa-regular fa-envelope"></i></h1>
            <button onClick={ onChangeContainer } className="contact">Projects <i class="fa-solid fa-code"></i></button>
        </header>
    )
}
