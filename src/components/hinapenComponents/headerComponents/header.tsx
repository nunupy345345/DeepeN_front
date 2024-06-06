import { Link } from "./navlink";
import './header.css'

type HeaderColor = {
    headerColor1?: string;
    headerColor2?: string;
    headerColor3?: string;
};

export const Header = (props: HeaderColor) => {
    const {headerColor1="defaultHeader", headerColor2="defaultHeader", headerColor3="defaultHeader"} = props
    return (
        <div className="all">
            <div className="header">
                <Link link="/" text="Deepen" linkName={headerColor1}/>
                <Link link="/hinapen" text="雛ペンのお部屋" linkName={headerColor2}/>
                <Link link="/" text="テキストの翻訳" linkName={headerColor3}/>
            </div>
        </div>  
    );
};