import React, { useState, FC, useEffect } from 'react';
import axios from "axios";

interface DataProps {
  data: string;
}
// この関数をコンポーネント化してる
const GetExample: FC = () => {
  const [data, setData] = useState<DataProps | null>(null);
  const url = 'http://localhost:8080';

  useEffect(() => {
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
    fetchData();
  },[url]);
  return (
    <div>
      <div>
        <h3>ここにメッセージがくるよ</h3>
        {data ? (<div>{data.data}</div>) : (<div>サーバー起動中</div>)}
      </div>
    </div>
  );
};

export default GetExample;