import './hinapen.css';
import hinapen仮 from '../../../public/images/hinapen仮.jpg'
import { Header } from "../../components/hinapenComponents/headerComponents/header";
import { Link } from "../../components/hinapenComponents/headerComponents/navlink";

export const Hinapen = () => {
  return (
    <>
      <Header headerColor2='selectingHeader'/>
      <div className="sub_header">
        <Link link="/talk" text="雛ペンに会いにいく！" linkName="sub_header1"/>
        <Link link="/zukan" text="図鑑を見る" linkName="sub_header1"/>
      </div>
      <div className="disc_img">
        <p className="discription">学んだペン語の知識を元に雛ペンとお話ししてみよう！<br/>君の声がけ次第で雛ペンは様々な姿に変身するよ！</p>
        <img src={hinapen仮} className="image" />
      </div>
    </>
  );
};