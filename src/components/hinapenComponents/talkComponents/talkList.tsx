import './talkContent.css'
import { useState } from "react";

export const talkList: readonly string[] = [
    "おはよう",
    "こんにちは",
    "こんばんは",
    "お元気ですか？",
    "いいね",
    "頑張って",
    "おめでとう",
]
//内容は仮
//日本語かペン語か？

export const Response = () => {
    const showPhrase=(Input:string)=>{
        if (Input != "" && isShown == true){
            return <p className='outputBox'>{talkList[Math.floor(Math.random()*talkList.length)]}</p> }
        else {
            return <p className='outputBox'/>}
    }
    const [isShown,setIsShown] = useState(false);
    const [output, setOutput] = useState('');
    const [input, setInput] = useState('');
    const onClick1 = () => {
        setOutput(input)
        setIsShown(true)
    };
    // const onClick2 = (str : e) = {
    //     setInput(e)
    //     setIsShown(false)
    // }
    return <div className="talkSpace">
        <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} onClick={() => setIsShown(false)}/>
        <button className="button" onClick={() => onClick1()}>話す</button>
        {showPhrase(output)}
    </div>
}