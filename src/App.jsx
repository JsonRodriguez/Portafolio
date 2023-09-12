import { LeftPanel } from "./ui"
import { RightPanel } from "./ui/RightPanel"

export const App = () => {
  return (
    <main>
      <div className="container">
        <LeftPanel />
        <RightPanel />
      </div>
    </main>
  )
}

