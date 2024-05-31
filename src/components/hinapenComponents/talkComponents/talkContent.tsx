// import talkpen from '../../../../public/images/hinapenTalk仮.jpg';
import './talkContent.css'
import { A } from './talkList';
import { B } from './talkList';

export const TalkContents = () => {
    return(
        <>
            <div>
                {/* <img src={talkpen} alt="talkpen" className='talkpen'/> */}
                <A/>
                <B/>
            </div>
            
        </>
        
    )
}



// <input value={text} onChange={event => setText(event.target.value)} className='inputBox'/>
//                 <button onClick={() => setDisplay(text)}>話しかける</button>

{/* <label >入力：<input type="text" id="nameText" className='inputarea'/></label>
                <input type="button" value="話しかける" id="checkButton"/> */}