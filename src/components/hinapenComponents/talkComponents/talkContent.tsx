import talkpen from '../../../../public/images/hinapenTalk仮.jpg';
import './talkContent.css'
import { Response } from './talkList';

export const TalkContents = () => {
    return(
        <>
            <Response/>
            <img src={talkpen} alt="talkpen" className='talkpen'/>
        </>  
    )
}