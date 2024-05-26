import {NavLink} from "react-router-dom";
import './hinapen.css';
import hinapen仮 from '../../../public/images/hinapen仮.jpg'
import { Header } from "../../components/hinapenComponents/header";

export const Hinapen = () => {
  return (
    <div className="home">
      <Header />
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