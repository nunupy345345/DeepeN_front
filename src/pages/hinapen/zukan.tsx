import {NavLink} from "react-router-dom";
import './zukan.css';
// from '././public/image' import 'pen.png'



export const Zukan = () => {
  return (
    <div>
      <h1>図鑑</h1>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      {/* <img src="pen.png" alt="" /> */}
    </div>
  );

};