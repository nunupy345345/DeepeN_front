import './talkContent.css'
import { useState } from "react";
import { dict } from '../../../../public/images/images';
import hinapen from '../../../../public/images/hinapen.jpg'

const array: readonly string[][] = [
    ["ぺン　ぺーぺ　ーぺぺン　ン　ーーンぺ　ぺぺぺン　ン　ーぺぺン　ーぺーン　ンンー　ぺーー　ーぺ　ンぺン　ぺぺぺ　ーンぺ　ーンーン　ぺーンン","最近、勉強捗ってる？",dict[0]],
    ['ぺ　ン　ぺぺンぺ　ン　ぺぺぺぺ　ぺンー　ぺーン　ぺンンー　ぺぺーぺ　ぺーー　ぺぺ　ーンーン　ぺーンン','ペンギンを見たことはある？',dict[1]],
    ["2",'夏休みまであと少し　頑張ろう!',dict[2]],
    ["ーンンン　ぺぺぺ　ぺーぺぺ　ーーンー　ぺぺぺー　ーぺ　ーンー　ンぺぺー　ンーー　ーンー","やっぱりお金だよね",dict[3]],
    ["4",'ちゃんと自炊してる？',dict[4]],
    ["5",'皇帝ペンギンに会えた君はついてるね！',dict[5]],
    ['ぺぺ　ンンぺー　ぺーン　ぺーー　ーーンぺ　ーンンー　ぺぺーぺ　ーーンー　ぺぺーぺ　ンーーー　ンンぺ　ン　ーーンぺ　ンぺン　ンぺ　ンンンン　ンンンぺ　ぺーぺ　ンンンぺ　ンぺ　ぺぺぺぺ　ーンぺー　ンンンン　ぺンぺー　ーぺーぺ　ーぺー　ーぺ　ぺーンン','あなたは、1人と5人、どちらの命を選びますか？',dict[6]],
    ['ぺぺ　ぺーぺ　ぺぺぺぺ　ぺンンー　ンぺぺン　ーンンぺ　ぺぺぺー　ーぺーぺ　ーンぺー　ぺーー　ぺーン　ンぺぺー　ンンンぺ　ぺぺぺー　ぺンーン　ぺンぺー　ーぺーン　ンンー　ぺンぺ　ンンンぺ　ンぺぺー','愛を拒むお前はただの臆病者だ',dict[7]],
    ['ぺ　ン　ぺぺンぺ　ン　ぺンぺン　ぺぺ　ーンーン　ーぺ　ぺぺンぺ　ーーンー　ぺーぺ　ンンンー　ーぺ　ぺーー　ぺぺ　ぺーぺ　ーぺー　ーンーン　ぺンぺ　ンンンぺ　ぺぺーぺ　ンンンぺ　ぺぺぺン　ンンンー　ーーンー　ぺーンー　ーぺーぺ　ぺぺぺ　ーンぺ　ぺーぺ　ーンーン　ーーンぺ　ぺンー　ン　ンンぺー　ンーン　ンぺーー　ンンぺ　ぺーン　ーンぺー　ーンぺ　ぺーぺ　ーぺぺン　ーンぺ　ン　ンぺぺー　ンーー','ペンギンである限りいつかは愛するものとの別離が待っている　みんなそれに耐えて生きてんだよ！',dict[7]],
    ['ぺぺ　ンンンー　ぺンーン　ーンぺ　ぺぺーぺ　ぺぺン　ーンぺ　ーンーン','熱くて溶けてる',dict[8]],
    // ['9','99',dict[9]],
]


// 変更すべき点
// ・吹き出しの形にする
// ・返事をそのまま言語を切り替える

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
                <img src={array[number][2]} alt="talkpen" className='talkpen'/>
                <p className='here'>　　　　　　</p></>
            }
            else if (isShown==true && translate==true){
                // setTranslate(false)
                return <>
                <p className={language[lang]}>{array[beforeNum][lang]}</p>
                <img src={array[beforeNum][2]} alt="talkpen" className='talkpen'/>
                <p className='here'>　　　　　　</p></>
            }
            else {
                return <>
                <p className={language[lang]}/>
                <img src={array[beforeNum][2]} alt="talkpen" className='talkpen'/>
                <p className='here'>　　　　　　</p></>
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
            {showPhrase(output,beforeNum)}
            {usingLang()}
            <button className='changeLang' onClick={() => changeLang(lang)}> 変更 </button>
        </div>
    )
};