import { Contact, Projects } from "./ui";
import { Profile } from "./ui";
import { useContainer } from "./hooks/useContainer";


export const App = () => {

  const 
  { 
    container, 
    title, 
    button,
    titleIcon,
    buttonIcon,
    onChangeContainer
  }  = useContainer();
  
  return (
    <main>
      <body className="container">
        <Profile />
        <div className="mainContainer">
          <header className="header">
            <h1>{title} <i class={titleIcon}></i></h1>
            <button onClick={ onChangeContainer } className="contact">{button} <i class={buttonIcon}></i></button>
          </header>
          {
            container ? <Projects /> : <Contact />
          }
        </div>
      </body>
    </main>
  )
}

