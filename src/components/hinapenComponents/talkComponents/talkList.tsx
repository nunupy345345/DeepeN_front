import './talkContent.css'
import { useState } from "react";
import { dict } from '../../../../public/images/images';

// const talkList: readonly string[] = [
//     "おはよう",
//     "こんにちは",
//     "こんばんは",
//     "お元気ですか？",
//     "いいね",
//     "頑張って",
//     "おめでとう",
// ]

const array: readonly string[][] = [
//  [日本語,ペン語,画像]
    ["0","00",dict[0]],
    ["1","11",dict[1]],
    ["2","22",dict[2]],
    ["3","33",dict[3]],
    ["4","44",dict[4]],
    ["5","55",dict[5]],
]

//内容は仮
//日本語かペン語か？
type Language = {
    language: number;
}

export const Response = (props: Language) => {
    const {language} = props
    let number: number = Math.floor(Math.random()*array.length);
    const showPhrase=(Input:string, beforeNum:number)=>{
        if (Input != "" && isShown == true){
            beforeNum = number;
            return <>
            <p className='outputBox'>{array[number][language]}</p>
            <img src={dict[number]} alt="talkpen" className='talkpen'/></>}
        else if (Input != "" && isShown == false){
            return <>
            <p className='outputBox'>{beforeNum}</p>
            <img src={dict[beforeNum]} alt="talkpen" className='talkpen'/></>}
        else {
            return <p className='outputBox'/>}
    }
    const [isShown,setIsShown] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [beforeNum, setBeforeNUM] = useState(number);
    const onClick1 = () => {
        setOutput(input)
        setIsShown(true)
    };
    const onClick2 = () => {
        setBeforeNUM(number)
    }
    // const onClick2 = (str : e) = {
    //     setInput(e)
    //     setIsShown(false)
    // }
    return (
        <div className="talkSpace">
            <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => setIsShown(false)} />
            <button className="button" onClick={() => onClick1()}>話す</button>
            {showPhrase(output,beforeNum)};
        </div>
    )
};