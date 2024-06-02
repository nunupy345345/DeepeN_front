import React from "react";
import { ZukanContents } from "../../components/hinapenComponents/zukanComponents/zukanContents";
import { Header } from "../../components/hinapenComponents/headerComponents/header";

export const Zukan = () => {
  return (
    <div className="all">
      <Header headerColor2="selectingHeader"/>
      <div className="zukan">
        <h1 className="Ztitle">図鑑</h1>
        <ZukanContents/>
      </div>
    </div>
  );
};