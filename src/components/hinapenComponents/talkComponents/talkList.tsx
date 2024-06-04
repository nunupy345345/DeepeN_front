import './talkContent.css'
import { useState } from "react";
import { dict } from '../../../../public/images/images';
import hinapen from '../../../../public/images/hinapen.jpg'

const array: readonly string[][] = [
    ["ぺン　ぺーぺ　ーぺぺン　ン　ーーンぺ　ぺぺぺン　ン　ーぺぺン　ーぺーン　ンンー　ぺーー　ーぺ　ンぺン　ぺぺぺ　ーンぺ　ーンーン　ぺーンン","最近、勉強捗ってる？",dict[0]],
    ["1","11",dict[1]],
    ["2","22",dict[2]],
    ["ーンンン　ぺぺぺ　ぺーぺぺ　ーーンー　ぺぺぺー　ーぺ　ーンー　ンぺぺー　ンーー　ーンー","やっぱりお金だよね",dict[3]],
    ["4","44",dict[4]],
    ["5","55",dict[5]],
    ['6','66',dict[6]],
    ['ぺ　ン　ぺぺンぺ　ン　ぺぺぺぺ　ぺンー　ぺーン　ぺンンー　ぺぺーぺ　ぺーー　ぺぺ　ーンーン　ぺーンン','ペンギンを見たことはある？',dict[7]],
    ['ぺぺ　ンンンー　ぺンーン　ーンぺ　ぺぺーぺ　ぺぺン　ーンぺ　ーンーン','熱くて溶けてる',dict[8]],
    ['9','99',dict[9]],
]


export const Response = () => {
    let number: number = Math.floor(Math.random()*array.length);
    const showPhrase=(Input:string, beforeNum:number)=>{
        if (Input != "" && isShown == true){
            beforeNum = number;
            return <>
            <p className='outputBox'>{array[number][lang]}</p>
            <img src={dict[number]} alt="talkpen" className='talkpen'/></>}
        else if (Input != "" && isShown == false){
            return <>
            <p className='outputBox'/>
            <img src={dict[beforeNum]} alt="talkpen" className='talkpen'/></>}
        else {
            return <>
            <p className='outputBox'> 雛ぺんに話しかけてみよう！ </p>
            <img src={hinapen} alt='hinapen' className='talkpen'/>
</>}
    }
    
//　else　役割、画像の選択等　確認
// 「ここに入力」と表示
// 吹き出し
// 返事、中央寄せ
// 文字サイズ　言語によって変えたほうが良い？
// 返事をそのまま言語を切り替える

    const [isShown,setIsShown] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [beforeNum, setBeforeNUM] = useState(0);
    const [lang, setLang] = useState(0);

    const onClick1 = () => {
        setIsShown(true)
        setOutput(input)
    };
    const onClick2 = () => {
        setIsShown(false)
        setBeforeNUM(number)
    };

    const usingLang = () => {
        if (lang == 0){
            return <p className='usingLang'> ペン語 </p>;
        }
        else {
            return <p className='usingLang'> 日本語 </p>
        }
    }

    const changeLang = (now:number) => {
        if (now == 0){
            setLang(1);
            setIsShown(false);
        }
        else {
            setLang(0);
            setIsShown(false);
            return <p>ペン語</p>
        }
    }

    return (
        <div className="talkSpace">
            <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => onClick2()} />
            <button className="button" onClick={() => onClick1()}> 話す </button>
            {usingLang()}
            {showPhrase(output,beforeNum)}
            <button className='changeLang' onClick={() => changeLang(lang)}> 変更 </button>
        </div>
    )
};