import Link from "next/link"
import React from "react"
import { IColors } from "../../components/Landing"
import CompanyName from "../../components/Landing/CompanyName"
import { H1, H4, H6, Span14, Span16 } from "../../components/Text"
import classes from "./style.module.scss"
import Image from "next/image"

const colors: IColors = {
  green: "#EF7385",
  grey: "#2f3339",
  grey1: "#f7f8f9",
  timerGray: "#EFF2F5",
  hr: "#DEDFE0",
  orange: "#FA9535",
  starsColor: "#FA9535",
  orange1: "#FF4E00",
  textGreenColor: "green",
  blue: "#36D0F8",
}

export default function thanks(props) {
  return (
    <div className={classes.body}>
      <CompanyName name={"text"} backgroundColor={colors.green} />
      <H1 className={classes.title}>Ваш заказ оформлен!</H1>
      <Span16 className={classes.subtitle}>
        Для уточнения указанных данных и подтверждения заказа с вами в ближайшее рабочее
        время свяжется оператор
      </Span16>
      <Span16 className={classes.subtitle2}>(с 8:00 до 22:00)</Span16>
      <H4 className={classes.my_phone}>
        Мы позвоним с <strong>(044)</strong> 333-90-<strong>48</strong>
      </H4>
      <H4 className={classes.you_phone}>
        Ваш номер телефона: <strong>+38 (044) 987-98-46</strong>
      </H4>
      <Span14 className={classes.wrong_number}>
        Если номер неверный,{" "}
        <Link href='/'>
          <a>отправьте заявку повторно</a>
        </Link>
      </Span14>
      <div className={classes.img}>
        <Image
          src='/phone-call-icon.svg'
          alt='Picture of the author'
          width={180}
          height={180}
        />
      </div>
    </div>
  )
}
