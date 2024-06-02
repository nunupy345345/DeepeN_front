import './zukan.css';
import { dict } from '../../../../public/images/images';

// export const DictPickup = () => {
//   for (var i in dict) {
//     return (
//       <>
//         <img src={dict[i]} alt={i} className="picture"/>
//         <h2 className="name">{i}</h2>
//       </>
//     )
//   }
// }

type DictPickerProps = {
  variable: string
  name: string
}

const DictPicker = (props: DictPickerProps) => {
  const { variable, name } = props
  return (
    <div className="set">
      <img src={dict[variable]} alt={name} className="picture"/>
      <h2 className="name">{name}</h2>
    </div>
  )
}

export const ZukanContents = () => {
  return(
    <div className="pictures">
      <DictPicker variable="0" name="ペン"/>
      <DictPicker variable="1" name="コアラペン"/>
      <DictPicker variable="2" name="日照りーペン"/>
      <DictPicker variable="3" name="ペソ"/>
      <DictPicker variable="4" name="ビッグペン"/>
      <DictPicker variable="5" name="皇帝ペンギン"/>
      <DictPicker variable="6" name="ペンギンの問題"/>
      <DictPicker variable="7" name="静かなるペン"/>
      <DictPicker variable="8" name="溶けペン"/>
      <DictPicker variable="9" name="うさペン"/>
    </div>
  )
}