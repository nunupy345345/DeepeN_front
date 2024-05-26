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
    <>
      <div className="set">
        <img src={dict[variable]} alt={name} className="picture"/>
        <h2 className="name">{name}</h2>
      </div>
    </>
  )
}


export const ZukanContents = () => {
  return(
    <div className="pictures">
      <DictPicker variable="k_pen" name="ペン"/>
      <DictPicker variable="k_koalapen" name="コアラペン"/>
      <DictPicker variable="k_hideripen" name="日照りーペン"/>
      <DictPicker variable="k_peso" name="ペソ"/>
      <DictPicker variable="k_bigpen" name="ビッグペン"/>
      <DictPicker variable="k_emperorpen" name="皇帝ペンギン"/>
      <DictPicker variable="k_penquestion" name="ペンギンの問題"/>
      <DictPicker variable="k_sizukanarupen" name="静かなるペン"/>
      <DictPicker variable="k_tokepen" name="溶けペン"/>
      <DictPicker variable="k_usapen" name="うさペン"/>
    </div>
  )
}