import { Header } from "../../components/hinapenComponents/headerComponents/header";
import { TalkContents } from "../../components/hinapenComponents/talkComponents/talkContent";
import './talk.css'

export const Talk = () => {
  return (
    <div className="all">
      <Header headerColor2="selectingHeader"/>
      <div className="talkroom">
        <TalkContents/>
      </div>  
    </div>
  );
};