import './home.css';
import { Header } from "../components/hinapenComponents/headerComponents/header";
import { useState } from "react";
import axios from "axios";
import fishbottun from '../../public/fishbutton.png'
import hinapen from '../../public/pen2.png'

export const Home = () => {
  //clickしたときにtrainのページにいくようにする
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
      <Header headerColor2="selectingHeader" />
      
      <div className='PandJ'>
        <p className='box'>日本語</p>
          <div className="fishbutton">
            <img src={fishbottun} alt="変換する"  onClick={onClick1}/>
          </div>
        <p className='box'>ぺ　ン　ンーーー</p>
      </div>

      <div className="r">
       <input className="hoge" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => setOutput("")}/>
       <input className="hoge" type="text" value={output} onChange={(e) => setOutput(e.target.value)} onClick={() => setInput("")}/>
      </div>

    <div className="balloon">
    <div className="faceicon">
      <img src={hinapen} alt="Dr.penの写真"></img>
    </div>
    <div className="chatting">
      <div className="says">
        <p>ぺ　ン　ぺぺンぺ　ン　ぺーー　ンンぺー　ぺーンー　ぺーぺ　ーぺぺン<br/>ーぺぺぺ　ーぺン　ンンぺ　ぺンぺ　ンーー　ーンーン　ぺぺン　ンぺン　ーぺンぺ　ンぺーぺ　ーぺ　ンンンン　ーー　ぺー　ーンー　ン　ぺーぺ　ーぺぺン　ーンーン　ンーー</p>
      </div>
    </div>
    </div>

    </div>
 
  );
};
