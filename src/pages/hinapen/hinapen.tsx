import {NavLink} from "react-router-dom";
import './hinapen.css';
import hinapen仮 from '../../../public/image/hinapen仮.jpg'

export const Hinapen = () => {
  const handleClick1 = () => {
    window.location.href = "/";
  }
  return (
    <div className="home">
      <NavLink to="/">ホームへ戻る</NavLink>
      <button onClick={handleClick1}></button>
      <div className="title">
        <h1> Deepen </h1>
        <h1>ひなぺんの部屋</h1>
        <h1> テキストの翻訳 </h1>
      </div>
      <div className="select">
        <NavLink to="/talk" className="option">雛ペンに会いに行く！</NavLink>
        <NavLink to="/zukan" className="option">図鑑を見る</NavLink>
      </div>
      <div className="disc_img">
        <p className="discription">学んだペン語の知識を元に雛ペンとお話ししてみよう！<br/>君の声がけ次第で雛ペンはペンは様々な姿に変身するよ！</p>
        <img src={hinapen仮} className="image" />
      </div>
    </div>
  );
};