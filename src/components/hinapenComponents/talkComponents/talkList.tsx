import './talkContent.css'
import { useState } from "react";
import { dict } from '../../../../public/images/images';
import hinapen from '../../../../public/images/hinapen.jpg'

const array: readonly string[][] = [
    ["ぺン　ぺーぺ　ーぺぺン　ン　ーーンぺ　ぺぺぺン　ン　ーぺぺン　ーぺーン　ンンー　ぺーー　ーぺ　ンぺン　ぺぺぺ　ーンぺ　ーンーン　ぺーンン","最近、勉強捗ってる？",dict[0]],
    ['ぺ　ン　ぺぺンぺ　ン　ぺぺぺぺ　ぺンー　ぺーン　ぺンンー　ぺぺーぺ　ぺーー　ぺぺ　ーンーン　ぺーンン','ペンギンを見たことはある？',dict[1]],
    // ["2","22",dict[2]],
    ["ーンンン　ぺぺぺ　ぺーぺぺ　ーーンー　ぺぺぺー　ーぺ　ーンー　ンぺぺー　ンーー　ーンー","やっぱりお金だよね",dict[3]],
    // ["4","44",dict[4]],
    // ["5","55",dict[5]],
    ['ペン語','あなたは、1人と5人、どちらの命を選びますか？',dict[6]],
    ['ペン語','愛を拒むお前はただの臆病者だ',dict[7]],
    ['ペン語','ペンギンである限りいつかは愛するものとの別離が待っている　みんなそれに耐えて生きてんだよ！',dict[7]],
    ['ぺぺ　ンンンー　ぺンーン　ーンぺ　ぺぺーぺ　ぺぺン　ーンぺ　ーンーン','熱くて溶けてる',dict[8]],
    // ['9','99',dict[9]],
]



// 吹き出し
// 返事をそのまま言語を切り替える

export const Response = () => {
    let number: number = Math.floor(Math.random()*array.length);
    const language: string[] = [ 'pen', 'jpn' ]
    const [isShown,setIsShown] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [beforeNum, setBeforeNUM] = useState(0);
    const [lang, setLang] = useState(0);    // 0→ペン語　1→日本語
    const [translate, setTranslate] = useState(false);

    const reset = () => {
        setIsShown(true)
        setOutput(input)
        setTranslate(false)
    };
    const enter = () => {
        setIsShown(false)
        setBeforeNUM(number)
        setTranslate
    };

    const usingLang = () => {
        if (lang == 0){ return <p className='usingLang'> ペン語 </p> }
        else { return <p className='usingLang'> 日本語 </p> }
    }

    const changeLang = (now:number) => {
        setTranslate(true);
        if (now == 0){ setLang(1) }
        else { setLang(0) }
    }

    const showPhrase=(Input:string, beforeNum:number)=>{
        if (Input != ""){
            if (isShown == true && translate == false){
                beforeNum = number;
                return <>
                <p className={language[lang]}>{array[number][lang]}</p>
                <img src={dict[number]} alt="talkpen" className='talkpen'/></>
            }
            else if (isShown==true && translate==true){
                // setTranslate(false)
                return <>
                <p className={language[lang]}>{array[beforeNum][lang]}</p>
                <img src={dict[beforeNum]} alt="talkpen" className='talkpen'/></>
            }
            else /*if (isShown==false && translate==false)*/{
                return <>
                <p className={language[lang]}/>
                <img src={dict[beforeNum]} alt="talkpen" className='talkpen'/></>
            }
        }
        else {
            return <>
            <p className='jpn'> 雛ぺんに話しかけてみよう！ </p>
            <img src={hinapen} alt='hinapen' className='talkpen'/>
            <p className='here'>⬆️ここに入力</p></>
        }
    }

    return (
        <div className="talkSpace">
            <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => enter()} />
            <button className="button" onClick={() => reset()}> 話す </button>
            {usingLang()}
            {showPhrase(output,beforeNum)}
            <button className='changeLang' onClick={() => changeLang(lang)}> 変更 </button>
        </div>
    )
};