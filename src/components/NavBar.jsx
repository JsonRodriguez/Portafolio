
export const NavBar = () => {
    return (
        <ul className="navbar">
            <li><input id="cb1" type="checkbox" /><label htmlFor="cb1"><i class="fa-brands fa-react"></i> React</label></li>
            <li><input id="cb2" type="checkbox" /><label htmlFor="cb2"><i class="fa-brands fa-square-js"></i> JavaScript</label></li>
            <li><input id="cb3" type="checkbox" /><label htmlFor="cb3"><i class="fa-brands fa-html5"></i> HTML</label></li>
            <li><input id="cb4" type="checkbox" /><label htmlFor="cb4"><i class="fa-brands fa-css3-alt"></i> CSS</label></li>
        </ul>
    )
}
