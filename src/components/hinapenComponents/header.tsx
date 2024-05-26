import { NavLink } from "react-router-dom"
// import

export const Header = () => {
    const handleClick1 = () => {
        window.location.href = "/";
      }
    return (
        <div className="home">
            <NavLink to="/">ホームへ戻る</NavLink>
            <button onClick={handleClick1}></button>
            <div className="title">
                <h1> Deepen </h1>
                <h1>ひなぺんの部屋</h1>
                <h1> テキストの翻訳 </h1>
            </div>
        </div>
    );
};