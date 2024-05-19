import {NavLink} from "react-router-dom";
import './pnf.css';

export const Pnf = () => {
  return (
    <div className="pnf">
      <h1>ページが見つかりません</h1>
      <NavLink to="/">ホームに戻る</NavLink>

    </div>
  );
};