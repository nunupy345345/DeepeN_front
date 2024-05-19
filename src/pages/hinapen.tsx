import {NavLink} from "react-router-dom";
import './hinapen.css';

export const Hinapen = () => {
  const handleClick1 = () => {
    window.location.href = "/";
  }
  return (
    <div className="home">
      <NavLink to="/">ホームへ戻る</NavLink>
      <button onClick={handleClick1}></button>
      <h1 className="title">ひなぺんの部屋の部屋</h1>
    </div>
  );
};