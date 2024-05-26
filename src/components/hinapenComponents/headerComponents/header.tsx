import { Link } from "./navlink";
import './header.css'

export const Header = () => {
    return (
        <div>
            <Link link="/" text="ホームへ戻る" linkName=""/>
            <div className="header">
                <Link link="/deepen" text="Deepen" linkName="header1"/>
                <Link link="/hinapen" text="雛ペンのお部屋" linkName="header1"/>
                <Link link="/text" text="テキストの翻訳" linkName="header1"/>
            </div>
        </div>
       
    );
};