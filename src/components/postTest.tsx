import React, { useState, FC, useEffect } from 'react';
import axios from "axios";

const PostExample: FC = () => {
  const [data,setData] = useState<any>(null);
    // const url = 'http://localhost:8080'; // MEMO: localで立てるときはこのURLを使う
  const url = `${import.meta.env.VITE_REACT_APP_BACK_URL}/test`;

  const testSenddata = {
    word: '昨日食べた林檎とappleは美味しかった!'
  };

  const fetchData = async () => {
    try {
      axios.post(url,testSenddata).then(response => {
        console.log(response)
        setData(response.data);
      })
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <div>
      <div>
        <h3>ここにTestメッセージがくるよ</h3>
        {data ? (<div><pre>{JSON.stringify(data, null, 2)}</pre> {/* 受信データを整形して表示 */}</div>) : (<div>サーバー起動中を確認してボタンを押してね</div>)}
      </div>
      <button onClick={fetchData}>POSTリクエストを送信</button>
    </div>
  );
};
export default PostExample;