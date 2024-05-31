import './talkContent.css'

import { useState } from "react";


export const talkList: readonly string[] = [
    "おはよう",
    "こんにちは",
    "こんばんは",
    "お元気ですか？",
    "いいね",
    "頑張ってね",
    "おめでとう",
]
//内容は仮
//日本語かペン語か？



const showPhrase=(Input:string)=>{
    if (Input != ""){
        return <p className='outputBox'>{talkList[Math.floor(Math.random()*talkList.length)]}</p>
    }
    else {
        return <p className='outputBox'/>
    }
}





export const Response = () => {
    const [output, setOutput] = useState('');
    const [input, setInput] = useState('');
    return <div className="talkSpace">
        <input className="inputBox" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="button" onClick={() => setOutput(input)}>話す</button>
        {showPhrase(output)}
    </div>
}

