import {NavLink} from "react-router-dom";
import './talk.css';



export const Talk = () => {
  return (
    <div>
      <h1>トーク</h1>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      {/* <button onClick={handleClick2}></button> */}
    </div>
  );

};

