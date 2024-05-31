import {NavLink} from "react-router-dom";
import GetExample from '../components/getTest';
import PostExample from '../components/postTest';
import './home.css';

export const Home = () => {
  //clickしたときにtrainのページにいくようにする
  const handleClick1 = () => {
    window.location.href = "/hinapen";
  }
  return (
    <div className="home">
      {/* <NavLink to="/instruction">説明</NavLink>
      <h1>ホーム</h1> */}

<header className="header">
    <nav className="nav">
      <ul className="menu-group">
        <li className="menu-item"><a href="">DeepeN</a></li>
        <li className="menu-item"><a href="">テキストの翻訳</a></li>
        <li className="menu-item"><a href="">雛ペンのお部屋</a></li>
      </ul>
    </nav>
</header>

      <section id="table">
		      <table border="1">
            <tr>
              <th><a href="" className="btn_01">日本語</a></th><th><a href="" className="btn_02">ぺ　ン　ンーーー</a></th>
            </tr>
          </table>
      </section>

      <div className="flex">
        <input className="inputBox" type="text"/>
        <input className="inputBox" type="text"/>
      </div>
      
    <div className="balloon">
    <div className="faceicon">
      <img src="public/pen2.png" alt="Dr.penの写真"></img>
    </div>
    <div className="chatting">
    <div className="says">
      <p>ペンギンは長生き！<br/>種にもよるけど15～20年生きるよ！！</p>
    </div>
    </div>
    </div>
    
    <section id="dr.pen">
        
      </section>
      
    <section id="button">
        <button onClick={handleClick1}>ひなぺんのお部屋</button>
    </section>
    </div>
  );
};