//logIn singUp のコンポーネントを統合して確認する
//ルーティングを/に書き換え直しておくこと
import { Link } from "react-router-dom";
import "../CSS/Check.css"

const Check = () =>{
    return (
        <div className="frame">
            <div className="frameTitle">
                Task Quest
            </div>
            <div className="frameOption">
                <Link to="/LogIn" className="logIn">Log in</Link>
                <Link to="/SignUp" className="signUp">Sign up</Link>
            </div>
        </div>
    ) 
}
export default Check;