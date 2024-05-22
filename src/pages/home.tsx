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
      <header>
		<a href=""><img src=""/></a>
		<nav className="nav">
			<ul className="menu-group">
            <li className="menu-item"><a href="">DeepeN</a></li>
			  <li className="menu-item"><a href="">テキストの翻訳</a></li>
			  <li className="menu-item"><a href="">雛ペンのお部屋</a></li>
			</ul>
		  </nav>
	    </header>

      <section id="button">
          <a href="" className="btn">テキストの翻訳</a>
          <a href="" className="btn">雛ペンのお部屋</a>
      </section>

      <section id="table">
		      <table border="1">
            <tr>
              <th><a href="" className="btn_01">日本語</a></th><th><a href="" className="btn_02">ぺ　ン　ンーーー</a></th>
            </tr>
            <tr>
                <td>入力してね</td><td></td>
            </tr>
          </table>
	    </section>
    
    <div class="balloon5">
    <div class="faceicon">
      <img src="public/pen2.png" alt="Dr.penの写真"></img>
    </div>
    <div class="chatting">
    <div class="says">
      <p>ペンギンは長生き！<br/>種にもよるけど15～20年生きるよ！！</p>
    </div>
    </div>
    </div>
    
    <section id="dr.pen">
        
    </section>
    <button onClick={handleClick1}>ひなぺんの部屋へ飛ぶ</button>
    </div>
  );
};