import { ZukanContents } from "../../components/hinapenComponents/zukanComponents/zukanContents";
import { Header } from "../../components/hinapenComponents/headerComponents/header";
// import { DictPickup } from "../../components/hinapenComponents/zukanComponents/zukanContents";


export const Zukan = () => {
  return (
    <div>
      <Header/><div className="zukan">
        <h1 className="Ztitle">図鑑</h1>
        <ZukanContents/>
        {/* <DictPickup/> */}
      </div>
    </div>
  );

};