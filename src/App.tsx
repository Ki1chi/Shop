
import { Link } from "react-router-dom";


function App() {
  
  return (
  <>
    <header className="header">Home</header>
    <main>
      <div className="main-text">
        Welcome to shop
      </div>
      <div className="main-text">
        Check out our cool items
      </div>
    </main>
    <div className="link-home"><Link to="/Shop">Shop page</Link></div>
  </>
  )
}

export default App
