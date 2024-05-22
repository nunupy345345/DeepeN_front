import {NavLink} from "react-router-dom";
import './zukan.css';



export const Zukan = () => {
  return (
    <div>
      <h1>図鑑</h1>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
    </div>
  );

};