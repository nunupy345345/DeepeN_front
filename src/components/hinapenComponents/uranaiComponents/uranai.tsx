import './uranai.css';
import React, { useState, FC, useEffect } from 'react';
import axios from "axios";

interface DataProps {
  data: string;
}

export const Uranai:FC = () => {
  const [data, setData] = useState<DataProps | null>(null);
  // const url = 'http://localhost:8080'; // MEMO: localで立てるときはこのURLを使う
  const url = import.meta.env.VITE_REACT_APP_BACK_URL;
  const fetchData = async () => {
    try {
      axios.get(url).then(res => {
        const response = res.data.message;
        console.log(response);
        setData({data:response});
      })
    } catch (error) {
      console.error(error);
    };
  };
  return (
    <div>
      <button className="btn_18" onClick={() => fetchData}>今日の占い
      </button>
    </div>
  );
}