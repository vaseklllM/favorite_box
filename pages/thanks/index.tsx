import Link from "next/link"
import React from "react"
import { titleColor } from "../../components/Landing"
import CompanyName from "../../components/Landing/CompanyName"
import { H1, H4, Span14, Span16 } from "../../components/Text"
import classes from "./style.module.scss"
import Image from "next/image"
import IStore from "../../store/interface/IStore"
import { connect } from "react-redux"
import { useRouter } from "next/router"

interface Props {
  phoneNumber: string
  companyName: string
}

function thanks(props: Props) {
  const { phoneNumber, companyName } = props

  const router = useRouter()

  if (typeof phoneNumber !== "string") {
    router.push("/")
  }

  return (
    <div className={classes.body}>
      <CompanyName name={companyName} backgroundColor={titleColor} />
      <H1 className={classes.title}>Ваш заказ оформлен!</H1>
      <Span16 className={classes.subtitle}>
        Для уточнения указанных данных и подтверждения заказа с вами в ближайшее рабочее
        время свяжется оператор
      </Span16>
      <Span16 className={classes.subtitle2}>(с 8:00 до 22:00)</Span16>
      <H4 className={classes.my_phone}>
        Мы позвоним с <strong>(066)</strong> 764-79-<strong>24</strong>
      </H4>
      <H4 className={classes.you_phone}>
        Ваш номер телефона: <strong>{phoneNumber}</strong>
      </H4>
      <Span14 className={classes.wrong_number}>
        Если номер неверный,&nbsp;
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

const mapState = ({ thank, landingData }: IStore) => ({
  phoneNumber: thank.phoneNumber,
  companyName: landingData.data.companyName,
})

export default connect(mapState)(thanks)
