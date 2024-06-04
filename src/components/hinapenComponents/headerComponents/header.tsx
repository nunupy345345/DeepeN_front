import { Link } from "./navlink";
import './header.css'
import AudioPlayer from "../../bgmComponents";

type HeaderColor = {
    headerColor1?: string;
    headerColor2?: string;
    headerColor3?: string;
};

export const Header = (props: HeaderColor) => {
    const {headerColor1="defaultHeader", headerColor2="defaultHeader", headerColor3="defaultHeader"} = props
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