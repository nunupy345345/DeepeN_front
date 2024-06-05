import './uranai.css';
import { useState, FC} from 'react';
import axios from "axios";

interface DataProps {
  data: string;
}

export const Uranai:FC = () => {
  const [property,setProperty] = useState<DataProps | null>(null);
  const [result,setResult] = useState<DataProps | null>(null);
  const [color,setColor] = useState<DataProps | null>(null);
  const [item,setItem] = useState<DataProps | null>(null);
  const [day,setDay] = useState<DataProps | null>(null);
  const [trivia,setTrivia] = useState<DataProps | null>(null);


  // const url = 'http://localhost:8080'; // MEMO: localで立てるときはこのURLを使う
  const url = `${import.meta.env.VITE_REACT_APP_BACK_URL}/omatu`;
  const fetchData = async () => {
    try {
      axios.get(url).then(res => {
        const resProperty = res.data.detail.property;
        console.log(property);
        const resResult = res.data.detail.result;
        const resColor = res.data.detail.color;
        const resItem = res.data.detail.item;
        const resDay = res.data.detail.day;
        const resTrivia = res.data.detail.trivia;
        setProperty({data:resProperty});
        setResult({data:resResult});
        setColor({data:resColor});
        setItem({data:resItem});
        setDay({data:resDay});
        setTrivia({data:resTrivia});
      })
    } catch (error) {
      console.error(error);
    };
  };
  return (
    <div>
      <div className='container'>
      <button className="cta_btn01" onClick={fetchData}>
        <span className="cta_btn01-front">占う</span>
      </button>
      <div className='sample_box2_4'>
        {!property ? (<p>ペンギン占いをしよう！</p>) : (<div></div>)}
        {property ? (<div className='property'>{property.data}</div>) : (<div></div>)}
        {result ? (<div className='result'>{result.data}</div>) : (<div></div>)}
        {color ? (<div className='color'>ラッキーカラー : {color.data}</div>) : (<div></div>)}
        {item ? (<div className='item'>ラッキーアイテム : {item.data}</div>) : (<div></div>)}
        {day ? (<div className='day'>ラッキーデー : {day.data}</div>) : (<div></div>)}
        {property ? (<div className='fuki'>ペンギン豆知識</div>):(<div></div>)}
        {trivia ? (<div className='trivia'>{trivia.data}</div>) : (<div></div>)}
      </div>
      </div>
    </div>
  );
}