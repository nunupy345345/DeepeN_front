import {NavLink} from "react-router-dom";
// import image from '../../../public/image/pen.png';
import { Header } from "../../components/hinapenComponents/header";
import { TalkContents } from "../../components/hinapenComponents/talkComponents/talkContent";

export const Talk = () => {
  return (
    <div>
      <Header />
      <NavLink to="/hinapen">雛ペンのお部屋へ戻る</NavLink>
      <TalkContents/>
    </div>
  );

};

