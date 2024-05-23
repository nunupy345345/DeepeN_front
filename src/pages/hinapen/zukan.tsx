import {NavLink} from "react-router-dom";
import './zukan.css';
import pen from '../../../public/image/pen.png';
import koalapen from '../../../public/image/koalapen.png';
import hideripen from '../../../public/image/hideri-pen.png';
import peso from '../../../public/image/peso.png';


export const Zukan = () => {
  return (
    <div>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      <div className="title">
        <h1> Deepen </h1>
        <h1>ひなぺんの部屋</h1>
        <h1> テキストの翻訳 </h1>
      </div>
      <div className="zukan">
        <h1 className="Zukan">図鑑</h1>
        <div className="picture">
          <img src={pen}/>
          <img src={hideripen}/>
          <img src={koalapen}/>
          <img src={peso}/>
        </div>

      </div>
      
      
    </div>
  );

};