import { ZukanContents } from "../../components/hinapenComponents/zukanComponents/zukanContents";
import { Header } from "../../components/hinapenComponents/headerComponents/header";
import { Uranai } from "../../components/hinapenComponents/uranaiComponents/uranai";
import AudioPlayer from "../../components/bgmComponents";

export const Zukan = () => {
  return (
    <div className="all">
      <Header headerColor2="selectingHeader"/>
      <div className="zukan">
        <h1 className="Ztitle">図鑑</h1>
        <ZukanContents/>
        <Uranai/>
        <AudioPlayer/>
      </div>
    </div>
  );
};