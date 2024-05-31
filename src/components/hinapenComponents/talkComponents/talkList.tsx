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


var random: number = Math.floor(Math.random()*talkList.length);

export const showPhrase=(Input:string)=>{
    if (Input != ""){
        return talkList[random];
    }
}



export const A = () => {
    const [count, setCount] = useState("");
    const showPhrase=()=>{
        setCount(talkList[random])
    }
    return <div>
        {/* <input type="text" value={count} onChange={(e) => setCount(e.target.value)}></input> */}
        <button onClick={showPhrase}>ボタン</button>
        {count}
    </div>
};

export const B = () => {
    const [display, set1] = useState('');
    const [text, setText] = useState('');
    return <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => set1(text)}>話す</button>
        {showPhrase(display)}
    </div>
}

