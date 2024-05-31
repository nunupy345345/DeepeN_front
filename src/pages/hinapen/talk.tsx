import { Header } from "../../components/hinapenComponents/headerComponents/header";
import { TalkContents } from "../../components/hinapenComponents/talkComponents/talkContent";
import './talk.css'

export const Talk = () => {
  return (
    <div>
      <Header headerColor2="selectingHeader"/>
      <div className="talkroom">
        <TalkContents/>
      </div>
      
      
      
    </div>
  );

};


{/* 



<p id="msg"></p>

<script>
function butotnClick(){
  msg.innerText = 'お名前は' + nameText.value + 'さんですね';
}

let nameText = document.getElementById('nameText');
nameText.value = '名前';
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);
</script> */}
