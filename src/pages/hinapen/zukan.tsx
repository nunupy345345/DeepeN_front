import {NavLink} from "react-router-dom";
import './zukan.css';
// import dict from '../../../public/image/images.tsx'


export const Zukan = () => {
  return (
    <div>
      <h1>図鑑</h1>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      {/* <img src={dict["pen"]} className="image" /> */}
      
    </div>
  );

};