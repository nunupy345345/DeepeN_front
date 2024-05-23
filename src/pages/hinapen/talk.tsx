import {NavLink} from "react-router-dom";
// import image from '../../../public/image/pen.png';



export const Talk = () => {
  return (
    <div>
      <h1>トーク</h1>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      {/* <img src={image} className="image" /> */}
    </div>
  );

};

