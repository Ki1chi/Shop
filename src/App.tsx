
import { Link } from "react-router-dom";
import { Home } from "./home";


function App() {

  
  
  return (
  <>
    <Home />
    <div className="link-home"><Link to="/Shop">ショップ</Link></div>
  </>
  )
}

export default App
