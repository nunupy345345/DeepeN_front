import { useState } from "react";
import './popUp.css'
import talkpen from '../../../../public/images/hinapenTalk仮.jpg';


// const BigImage = () => {
//     return (<div>
//         <img src={talkpen} alt="talkpen" className='talkpen'/>
//         <p>説明</p>
//     </div>)
// }


const PopUp = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  return (
    <div>
        <button onClick={togglePopUp}>{<img src={talkpen}/>}</button>

      {isPopUpVisible && (
        <div className="PouUp">
            <img src={talkpen} alt="talkpen" className='talkpen'/>
            <p>説明</p>
          <button onClick={togglePopUp}>閉じる</button>
        </div>
      )}
    </div>
  );
};

export default PopUp;
