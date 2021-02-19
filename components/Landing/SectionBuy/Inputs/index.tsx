import InputMask from "react-input-mask"
import classes from "./style.module.scss"
import { useState } from "react"
import { UserIcon, PhoneIcon } from "./icons"
import { txt } from "../../../../utils"

export interface IInputsProps {}

export default function Inputs(props: IInputsProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  function changeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value.replace(/[0-9]/g, ""))
  }

  function changePhone(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(event.target.value)
  }

  function buy() {
    console.log("buy")
  }

  return (
    <div className={classes.Inputs}>
      <div className={txt.join([classes.input, classes.name])}>
        <UserIcon className={classes.input_icon} />
        <input
          type='text'
          value={name}
          onChange={changeName}
          placeholder='Введите ваше Ф.И.О.'
        />
      </div>
      <div className={classes.input}>
        <PhoneIcon className={txt.join([classes.input_icon, classes.phone_icon])} />
        <InputMask
          mask='+38 (999)-999-99-99'
          type='tel'
          placeholder='Введите ваш телефон'
          value={phone}
          onChange={changePhone}
        />
      </div>
      <button onClick={buy} className={classes.btn}>
        Купить сейчас
      </button>
    </div>
  )
}
