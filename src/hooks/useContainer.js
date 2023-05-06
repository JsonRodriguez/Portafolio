import { useState } from "react"

export const useContainer = () => {

    const [ container, setContainer ] = useState( true );
    const [ title, setTitle ] = useState( 'Projects' );
    const [ button, setButton ] = useState( `Let's talk` );
    const [ titleIcon, setTitleIcon ] = useState( 'fa-solid fa-code' );
    const [ buttonIcon, setButtonIcon ] = useState( 'fa-regular fa-envelope' );

    // true for Projects 
    // false for contact

    const onChangeContainer = () => {
        if( container ){
            setTitle(`Let's talk`);
            setButton('Projects');
            setTitleIcon('fa-regular fa-envelope');
            setButtonIcon('fa-solid fa-code');
            setContainer(false);
        }else{
            setTitle(`Projects`);
            setButton(`Let's talk`);
            setTitleIcon('fa-solid fa-code');
            setButtonIcon('fa-regular fa-envelope');
            setContainer(true);
        }
    }

    return{
        container,
        title,
        button,
        titleIcon,
        buttonIcon,
        onChangeContainer
    };
}
