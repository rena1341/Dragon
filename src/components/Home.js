import "../CSS/Home.css" 
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="Home">
            <div className="text">
            <h1>Task Quest</h1>
            </div>
            <div crassName="option">
            <Link to="/Continue">つづきから</Link>
            <Link to="/Task">タスクを決める</Link>
            <Link to="/Setting">設定</Link>
            </div>
        </div>
    );
}

export default Home;