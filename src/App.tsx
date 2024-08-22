
import { Link } from "react-router-dom";


function App() {
  
  return (
  <>
    <header className="header">Home</header>
    <main>
      <div className="main-text">
        ホームページ
      </div>
      <div className="main-text">
        カッコいいボタン
      </div>
    </main>
    <div className="link-home"><Link to="/Shop">ショップ</Link></div>
  </>
  )
}

export default App
