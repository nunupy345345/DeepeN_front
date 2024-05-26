import './zukan.css';
import pen from '../../../../public/images/pen.png';
import koalapen from '../../../../public/images/koalapen.png';
import hideripen from '../../../../public/images/hideri-pen.png';
import peso from '../../../../public/images/peso.png';
import bigpen from '../../../../public/images/bigpen.png';
import emperorpen from '../../../../public/images/emperorpen.png';
import penquestion from '../../../../public/images/penquestion.png';
import sizukanarupen from '../../../../public/images/sizukanarupen.png';
import tokepen from '../../../../public/images/tokepen.png';
import usapen from '../../../../public/images/usapen.png';

export const ZukanContents = () => {
    return(
        <div className="pictures">
        <div className="set">
          <img src={pen} alt="pen" className="picture"/>
          <h2 className="name">ペン</h2>
        </div>
        <div className="set">
          <img src={hideripen} alt="hideripen" className="picture"/>
          <h2 className="name">日照りーペンギン</h2>
        </div>
        <div className="set">
          <img src={koalapen} alt="koalapen" className="picture"/>
          <h2 className="name">コアラペン</h2>
        </div>
        <div className="set">
          <img src={peso} alt="peso" className="picture"/>
          <h2 className="name">ペソ</h2>
        </div>
        <div className="set">
          <img src={bigpen} alt="bigpen" className="picture"/>
          <h2 className="name">ビッグ・ペン</h2>
        </div>
        <div className="set">
          <img src={emperorpen} alt="emperorpen" className="picture"/>
          <h2 className="name">皇帝ペンギン</h2>
        </div>
        <div className="set">
          <img src={penquestion} alt="penquestion" className="picture"/>
          <h2 className="name">ペンギンの問題</h2>
        </div>
        <div className="set">
          <img src={sizukanarupen} alt="sizukanarupen" className="picture"/>
          <h2 className="name">静かなるペン</h2>
        </div>
        <div className="set">
          <img src={tokepen} alt="tokepen" className="picture"/>
          <h2 className="name">溶けペン</h2>
        </div>
        <div className="set">
          <img src={usapen} alt="usapen" className="picture"/>
          <h2 className="name">うさペン</h2>
        </div>
      </div>  
    )
}