import { Link } from "./navlink";
import './header.css'
import AudioPlayer from "../../bgmComponents";
import axios from 'axios';
import { useEffect } from "react";
type HeaderColor = {
    headerColor1?: string;
    headerColor2?: string;
    headerColor3?: string;
};

export const Header = (props: HeaderColor) => {
    const {headerColor1="defaultHeader", headerColor2="defaultHeader", headerColor3="defaultHeader"} = props
  const url = import.meta.env.VITE_REACT_APP_BACK_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(url).then(res => {
          const response = res.data.message;
          console.log(response);
        })
      } catch (error) {
        console.error(error);
      };
    };
    fetchData();
  },[url]);
    return (
        <div className="all">
            <Link link="/" text="ホームへ戻る" linkName=""/>
            <div className="header">
                <Link link="/" text="Deepen" linkName={headerColor1}/>
                <Link link="/hinapen" text="雛ペンのお部屋" linkName={headerColor2}/>
                <Link link="/" text="テキストの翻訳" linkName={headerColor3}/>
                <div className="player">
                    <AudioPlayer/>
                </div>
            </div>
        </div>  
    );
};