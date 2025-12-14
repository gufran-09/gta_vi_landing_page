import gsap from "gsap"
import { ScrollTrigger,  } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <h1 className="text-pink">
        Welcome to the World of GTA and GSAP
      </h1>
    </main>
  )
}

export default App