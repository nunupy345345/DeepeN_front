import {NavLink} from "react-router-dom";
import { ZukanContents } from "../../components/hinapenComponents/zukanComponents/zukanContents";
import { Header } from "../../components/hinapenComponents/header";


export const Zukan = () => {
  return (
    <div>
      <Header/>
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>

      <div className="zukan">
        <h1 className="Ztitle">図鑑</h1>
        <ZukanContents/>
        
      </div>
    </div>
  );

};