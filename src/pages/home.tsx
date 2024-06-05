import './home.css';
import { Header } from "../components/hinapenComponents/headerComponents/header";
import { useState } from "react";
import axios from "axios";

export const Home = () => {
  //clickしたときにtrainのページにいくようにする
  const handleClick1 = () => {
    window.location.href = "/hinapen";
  }
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

  
    const onClick1 = async () => {
      // setJIsShown(true)
      // const url = 'http://localhost:8080'; // MEMO: localで立てるときはこのURLを使う
      
      const url = `${import.meta.env.VITE_REACT_APP_BACK_URL}/deepen`;
      console.log(input);
      console.log(output);
      if (input !== "") {
        const testSenddata = {
          word: input
        };

        try {
          axios.post(url,testSenddata).then(response => {
            console.log(response)
            setOutput(response.data.return);
          })
        } catch (error) {
          console.error(error);
        };      
      } else {
        const testSenddata = {
          word: output
        };

        try {
          axios.post(url,testSenddata).then(response => {
            console.log(response)
            setInput(response.data.return);
          })
        } catch (error) {
          console.error(error);
        };      
      }
    };
    

  return (
    <div className="home">
      {/* <NavLink to="/instruction">説明</NavLink>
      <h1>ホーム</h1> */}
{/* 
<header className="header">
    <nav className="nav">
      <ul className="menu-group">
        <li className="menu-item"><a href="">DeepeN</a></li>
        <li className="menu-item"><a href="">テキストの翻訳</a></li>
        <li className="menu-item"><a href="">雛ペンのお部屋</a></li>
      </ul>
    </nav>
</header> */}
      <Header headerColor2="selectingHeader" />
      
      <section id="table">
		      <table border={1}>
          <tr>
            <th>日本語</th><th>ぺ　ン　ンーーー</th>
            {/* <th><a href="" className="btn_01">日本語</a></th><th><a href="" className="btn_02">ぺ　ン　ンーーー</a></th> */}
          </tr>
          </table>
      </section>

    

    

      <div className="flex-box">
       <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => setOutput("")}/>
       <input className="inputBox" type="text" value={output} onChange={(e) => setOutput(e.target.value)} onClick={() => setInput("")}/>
      </div>
      
      <div className="fishbutton">
      <p><img src="public/fishbutton.png" alt="変換する"  onClick={onClick1}/></p>
      </div>
      
    <div className="balloon">
    <div className="faceicon">
      <img src="public/pen2.png" alt="Dr.penの写真"></img>
    </div>
    <div className="chatting">
    <div className="says">
      <p>ぺ　ン　ぺぺンぺ　ン　ぺーー　ンンぺー　ぺーンー　ぺーぺ　ーぺぺン<br/>ーぺぺぺ　ーぺン　ンンぺ　ぺンぺ　ンーー　ーンーン　ぺぺン　ンぺン　ーぺンぺ　ンぺーぺ　ーぺ　ンンンン　ーー　ぺー　ーンー　ン　ぺーぺ　ーぺぺン　ーンーン　ンーー</p>
    </div>
    </div>
    </div>
      
    <section id="button">
        {/* <button onClick={handleClick1}>ひなぺんのお部屋</button> */}
    </section>
    </div>
  );
};

// const url = import.meta.env.VITE_REACT_APP_BACK_URL/deepen;