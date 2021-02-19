import InputMask from "react-input-mask"
import classes from "./style.module.scss"
import { FormEvent, useState } from "react"
import { UserIcon, PhoneIcon } from "./icons"
import { txt } from "../../../../utils"
import { useForm, Controller } from "react-hook-form"
import { Span12 } from "../../../Text"

export interface IInputsProps {}

type Inputs = {
  name: string
  phoneNumber: string
}

export default function Inputs(props: IInputsProps) {
  const { register, handleSubmit, control, watch } = useForm<Inputs>()
  const [errors, setErrors] = useState({ name: undefined, phoneNumber: undefined })

  function sendDataToTelegram(data: Inputs) {
    const { name, phoneNumber } = data

    console.log("заказ отправлен")

    // console.log(name, phoneNumber)
  }

  function buy(data: Inputs) {
    const { name } = data
    const phoneNumber = data.phoneNumber.replace(/\D+/g, "")

    const isErrName = name.length < 2
    const isErrPhone = phoneNumber.length !== 12

    /** валидация */
    if (isErrName || isErrPhone) {
      if (isErrName) {
        setErrors((v) => ({ ...v, name: "Неправильное название" }))
      } else {
        setErrors((v) => ({ ...v, name: undefined }))
      }

      if (isErrPhone) {
        setErrors((v) => ({ ...v, phoneNumber: "Неправильный пароль" }))
      } else {
        setErrors((v) => ({ ...v, phoneNumber: undefined }))
      }

      return undefined
    }

    setErrors((v) => ({ ...v, name: undefined, phoneNumber: undefined }))

    sendDataToTelegram({ phoneNumber, name })
  }

  return (
    <form onSubmit={handleSubmit(buy)} className={classes.form}>
      <div className={txt.join([classes.input_wrapper])}>
        <UserIcon className={classes.input_icon} />
        <input
          className={classes.input}
          name='name'
          placeholder='Введите ваше Ф.И.О.'
          ref={register}
        />
        {errors.name && <Span12 className={classes.err_text}>{errors.name}</Span12>}
      </div>
      <div className={txt.join([classes.input_wrapper])}>
        <PhoneIcon className={txt.join([classes.input_icon, classes.phone_icon])} />
        <Controller
          as={InputMask}
          control={control}
          mask='+38 (999)-999-99-99'
          name='phoneNumber'
          placeholder='Введите ваш телефон'
          className={classes.input}
          defaultValue=''
        />
        {errors.phoneNumber && (
          <Span12 className={classes.err_text}>{errors.phoneNumber}</Span12>
        )}
      </div>
      <input type='submit' className={classes.btn} value='Купить сейчас' />
    </form>
  )
}

//  <div className={txt.join([classes.input, classes.name])}>
//   <UserIcon className={classes.input_icon} />
//   <input
//     type='text'
//     value={name}
//     onChange={changeName}
//     placeholder='Введите ваше Ф.И.О.'
//   />
// </div>
// <div className={classes.input}>
//   <PhoneIcon className={txt.join([classes.input_icon, classes.phone_icon])} />
//   <InputMask
//     mask='+38 (999)-999-99-99'
//     type='tel'
//     placeholder='Введите ваш телефон'
//     value={phone}
//     onChange={changePhone}
//   />
// </div>
// <button onClick={buy} className={classes.btn}>
//   Купить сейчас
// </button>
