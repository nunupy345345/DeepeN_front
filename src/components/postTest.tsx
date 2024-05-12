import React, { useState, FC, useEffect } from 'react';
import axios from "axios";

const PostExample: FC = () => {
  const [data,setData] = useState<any>(null);
  const url = 'http://localhost:8080/test'

  const testSenddata = {
    word: '昨日食べた林檎とappleは美味しかった'
  };
  useEffect(() => {
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
    fetchData();
  },[url]);
  return (
    <div>
      <div>
        <h3>ここにTestメッセージがくるよ</h3>
        {data ? (<div><pre>{JSON.stringify(data, null, 2)}</pre> {/* 受信データを整形して表示 */}</div>) : (<div>データがありません！コンソール見てね</div>)}
      </div>
    </div>
  );
};
export default PostExample;