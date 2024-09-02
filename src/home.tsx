
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
        <header className="header">Home</header>
        <div className="link-home"><Link to="/Shop">ショップ</Link></div>
        <main>
            <div className="main-text">
            ホームページ
            </div>
            <div className="main-text">
            カッコいいボタン
            </div>
        </main>
        </>
    )

} 

export default Home